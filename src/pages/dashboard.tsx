import { ChatEmptyIcon, VideoEmptyIcon } from '@/assets/empty-icon';
import {
  CheckmarkFilled,
  Chevron,
  Close,
  Expand,
  Logo,
  RotateIcon,
  UploadIcon,
  UploadIconWithoutBg,
  YoutubeIcon
} from '@/assets/icons';
import { ChatView } from '@/features/dashboard/chat-section';
import { SummaryView } from '@/features/dashboard/summary-section';
import { Generating } from '@/features/dashboard/transitions/generating';
import { UploadingTransition } from '@/features/dashboard/transitions/uploading';
import { UploaderWrapper } from '@/features/dashboard/uploader-wrapper';
import useAuthQuery from '@/hooks/use-auth-query';
import { useClickOutside } from '@/hooks/use-click-outside';
import { sessionOptions } from '@/lib/i-session';
import { API_URL, SHIKSHA_BASE_URL } from '@/services/shiksha-ml';
import { GlobalLayout } from '@/shared/global-layout';
import { SEO } from '@/shared/seo';
import { Button, ToastContainer } from '@/ui';
import { Card } from '@/ui/card';
import { EmptyPage } from '@/ui/empty-page';
import { useUserSession } from '@store/userSession';
import axios from 'axios';
import { withIronSessionSsr } from 'iron-session/next';
import { Fragment, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [pdfFile, setPdfFile] = useState<File | null | any>(null);
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [youtubeLink, setYoutubeLink] = useState('');
  const [youtubeName, setYoutubeName] = useState('');
  const [data, setData] = useState<any>(null);
  const [isResponseSuccessfull, setIsResponseSuccessfull] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [expand, setExpand] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [assignedCode, setAssignedCode] = useState('');
  const [videoId, setVideoId] = useState('');
  const [pdfname, setPdfname] = useState('');
  const [load, setLoad] = useState(false);
  const [drop, setDrop] = useState(false);
  const [link, setLink] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showTab, setShowTab] = useState(true);
  const [name, setName] = useState();
  const { userSession } = useUserSession();

  const [username, setUsername] = useState(userSession?.name);

  useEffect(() => {
    return setUsername(localStorage.getItem('name'));
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category: SetStateAction<null>) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const YRef = useClickOutside(() => setShowDropdown(false));
  const FRef = useClickOutside(() => setIsOpen(false));
  const PRef = useClickOutside(() => setDrop(false));

  const isDisabled = true;

  const { data: current, } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.CURRENTAFFAIRS,
    queryKey: ['currentAffair'],
  });

  const { data: iq } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.IQ,
    queryKey: ['iq'],
  });

  const { data: quiz } = useAuthQuery({
    url: SHIKSHA_BASE_URL + API_URL.QUIZ,
    queryKey: ['quiz'],
  });

  const { data: dropdownList, isLoading } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.TRANSCRIPTION,
    queryKey: ['transcription'],
  });

  const { data: dropdownListPdf } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.TRANSCRIPTIONPDF,
    queryKey: ['transcriptionpdf'],
  });

  const { data: filterData, } = useAuthQuery<any>({
    url: SHIKSHA_BASE_URL + API_URL.FILTER,
    queryKey: ['filter'],
  });

  function convertToGroupArray(data: any) {
    const groupArray = [];

    for (const groupName in data) {
      groupArray.push({
        groupName: groupName,

        groupDetails: data[groupName],
      });
    }

    return groupArray;
  }

  const groupArray = convertToGroupArray(dropdownList);
  const groupArrayPdf = convertToGroupArray(dropdownListPdf);

  function handleBadgeClick(val: any) {
    handlePDFClose();
    console.log('ytl');
    setYoutubeLink(val.link);
    setYoutubeName(val.name);
    setAssignedCode(val?.assigned_code);
    setVideoId(val?.videoId);
    setLoading(false);
    // setHasError(true);
    setIsResponseSuccessfull(true);

    // setVideoId('8uDvyzKZt7U');


  }

  function handleBadgeClickPdf(val: any) {
    handleYoutubeClose();
    console.log('pdfbadge');
    setLink(`${val.link}.pdf`);
    setPdfname(val?.name)
    setYoutubeName('');
    setAssignedCode(val?.assigned_code);
    // setVideoId(val?.videoId);
    setLoading(false);
    // setHasError(true);
    setIsResponseSuccessfull(true);
  }

  // console.log('AssignedCode', assignedCode);
  // console.log('videoId', videoId);

  const handleInputChange = (e: { target: { value: SetStateAction<string> } }) => {
    setYoutubeLink(e.target.value);
    if (e.target.value !== '') {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleFileUpload();
    }
  };

  // function handlePdf(event: { target: any }) {
  //   handleYoutubeClose();
  //   const allowedExtensions = ['.pdf'];
  //   const fileInput = event.target;
  //   const file = fileInput.files[0];
  //   setPdfFile(file);
  //   setLoad(true);

  //   if (!file) {
  //     console.log('No file selected');
  //     return;
  //   }

  //   const fileExtension = file?.name?.substring(file?.name?.lastIndexOf('.')).toLowerCase();
  //   if (!allowedExtensions?.includes(fileExtension)) {
  //     setLoad(false);
  //     setHasError(true);
  //     fileInput.value = '';
  //   } else {
  //     const pdfViewerContainer: HTMLIFrameElement | null = document.getElementById(
  //       'pdfViewerContainer',
  //     ) as HTMLIFrameElement;
  //     console.log('pdfexist', pdfViewerContainer);
  //     if (pdfViewerContainer) {
  //       // Use <embed> element to display the PDF with #toolbar=0 parameter
  //       pdfViewerContainer.srcdoc = `<embed src="${URL.createObjectURL(
  //         file,
  //       )}#toolbar=0" type="application/pdf" width="100%" height="360"></embed>`;
  //       console.log('pdfexist', pdfViewerContainer);
  //     }
  //     setHasError(false);
  //     setIsResponseSuccessfull(true);
  //     setLoading(false);
  //     setPdfname(file.name);
  //     const formData = new FormData();
  //     formData.append('pdfFile', file);
  //     const url = 'http://shikshaml.com/backend/uploadd';
  //     axios
  //       .post(url, formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //       })
  //       .then(response => {
  //         console.log(response.data.assignedCodesss);
  //         localStorage.setItem('assignedCode', response?.data?.assignedCodesss);
  //         setData(response.data);
  //         setAssignedCode(response?.data?.assignedCodesss);
  //         setLoad(false);
  //         hasError && setHasError(false);
  //       })
  //       .catch(error => {
  //         console.error('Error uploading the file:', error);
  //       });
  //   }
  // }

  // const url = `${MFS_HOST}/`;
  // const socket = useSocket(url, '/');

  // useEffect(() => {
  //   if (socket) {
  //     console.log('if-socket', socket);
  //     socket.on('connect', () => {
  //       // eslint-disable-next-line no-console
  //       console.log('socket connected');
  //     });
  //     socket.on('data', (data: any[]) => {
  //       // console.log('data', data);
  //       // setEmailQueueData(data);
  //     });
  //     socket.on('connect_error', (err: any) => {
  //       console.error(err instanceof Error);
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [socket]);


  function handlePdf(event: { target: any }) {
    handleYoutubeClose();
    const allowedExtensions = ['.pdf'];
    const fileInput = event.target;
    const file = fileInput.files[0];
    setPdfFile(file);
    setLoad(true);

    if (!file) {
      console.log('No file selected');
      return;
    }

    const fileExtension = file?.name?.substring(file?.name?.lastIndexOf('.')).toLowerCase();
    if (!allowedExtensions?.includes(fileExtension)) {
      setLoad(false);
      setHasError(true);
      fileInput.value = '';
    } else {
      const pdfViewerContainer: HTMLIFrameElement | null = document.getElementById(
        'pdfViewerContainer',
      ) as HTMLIFrameElement;
      console.log('pdfexist', pdfViewerContainer);
      if (pdfViewerContainer) {
        // Use <embed> element to display the PDF with #toolbar=0 parameter
        pdfViewerContainer.srcdoc = `<embed src="${URL.createObjectURL(
          file,
        )}#toolbar=0" type="application/pdf" width="100%" height="360"></embed>`;
        console.log('pdfexist', pdfViewerContainer);
      }
      setHasError(false);
      setIsResponseSuccessfull(true);
      setLoading(false);
      setPdfname(file.name);
      const formData = new FormData();
      formData.append('pdfFile', file);


      // Initialize url with a default value
      let url = '';

      // Add a condition to set the URL based on the username
      if (username === 'Ankit') {
        url = 'http://shikshaml.com/backend/upload';
        console.log(username, 'hey 1');
      } else if (username === 'Anurag') {
        console.log(username, 'hey 2');
        url = 'http://shikshaml.com/backend2/upload';
      }
      else {
        console.log(username, 'hey 3');

        url = 'http://shikshaml.com/backend3/upload';

      }

      axios
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log(response.data.assignedCodesss);
          localStorage.setItem('assignedCode', response?.data?.assignedCodesss);
          setData(response.data);
          setAssignedCode(response?.data?.assignedCodesss);
          setLoad(false);
          hasError && setHasError(false);
        })
        .catch(error => {
          console.error('Error uploading the file:', error);
        });
    }
  }

  function handleYoutubeClose() {
    setYoutubeLink('');
    setLoading(false);
    setIsResponseSuccessfull(false);
    setShowUpload(true);
    setHasError(false);
    setVideoId('');
    setShowUpload(false);
    setData(null);
    setLoad(false);
  }
  function handlePDFClose() {
    setPdfFile(null);
    setLink('');
    setPdfname('')
    setPdfLoaded(false);
    setLoading(false);
    setLoad(false);
    setIsResponseSuccessfull(false);
    setHasError(false);
    setData(null);
    setShowUpload(true);
  }
  async function handleFileUpload() {
    handlePDFClose();
    console.log('upload');
    setShowUpload(false);
    setLoading(true);
    setLoad(true);

    if (youtubeLink !== '') {
      let url = ''
      if (username === 'Ankit') {
        url = SHIKSHA_BASE_URL + API_URL.UPLOAD_YOUTUBE;
        console.log(username, 'hey 1');
      } else if (username === 'Anurag') {
        console.log(username, 'hey 2');
        url = 'http://shikshaml.com/backend2/upload_youtube';
      }
      else {
        console.log(username, 'hey 3');

        url = 'http://shikshaml.com/backend3/upload_youtube';

      }

      // const url = SHIKSHA_BASE_URL + API_URL.UPLOAD_YOUTUBE;
      const sendRes = { link: youtubeLink };
      // const finalRes = await sendData({ url: url, body: sendRes, method: 'POST' });
      await axios
        .post(url, sendRes, {
          // headers: {
          //   'Content-Type': 'application/json',
          //   Authorization: 'Bearer ' + localStorage.getItem('ml_token') ?? '',
          // },
          // onUploadProgress: (progressEvent: any) => {
          //   const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          //   setProgressBar(percentage);
          // },
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            localStorage.setItem('assignedCode', response?.data?.assignedCode);
            setData(response.data);
            setIsResponseSuccessfull(true);
            setLoading(false);
            setLoad(false);
            setVideoId(response?.data?.videoId);
            setAssignedCode(response?.data?.assignedCode);
            hasError && setHasError(false);
          }
        })
        .catch(function (error) {
          console.log('error', error);
          setLoad(false);
          toast.error(error);
          setLoading(false);
          setHasError(true);
          setIsResponseSuccessfull(true);
        });
      console.log('Video uploaded:', youtubeLink);
    } else if (pdfFile !== null) {
      const allowedExtensions = ['.pdf'];
      const fileInput: HTMLInputElement | any = document.getElementById('pdf-uploader');
      const file = pdfFile?.[0];
      const fileExtension = file?.name?.substring(file?.name?.lastIndexOf('.')).toLowerCase();
      if (!allowedExtensions?.includes(fileExtension)) {
        setHasError(true);
        fileInput.value = '';
      } else {
        setPdfFile(file);
        setHasError(false);
        setIsResponseSuccessfull(true);
        setLoading(false);
        setPdfname(pdfFile[0].name);
        const pdfViewerContainer: HTMLIFrameElement | null = document.getElementById(
          'pdfViewerContainer',
        ) as HTMLIFrameElement;
        if (pdfViewerContainer) {
          // Use <embed> element to display the PDF with #toolbar=0 parameter
          pdfViewerContainer.srcdoc = `<embed src="${URL.createObjectURL(
            file,
          )}#toolbar=0" type="application/pdf" width="100%" height="360"></embed>`;
        }
        const formData = new FormData();
        formData.append('pdfFile', file);
        let url = ''
        if (username === 'Ankit') {
          url = SHIKSHA_BASE_URL + API_URL.UPLOAD_YOUTUBE;
          console.log(username, 'hey 1');
        } else if (username === 'Anurag') {
          console.log(username, 'hey 2');
          url = 'http://shikshaml.com/backend2/upload_youtube';
        }
        else {
          console.log(username, 'hey 3');

          url = 'http://shikshaml.com/backend3/upload_youtube';

        }
        // url = 'http://164.52.218.107/shikshaml/uploadd';
        // console.log(url, "url")
        axios
          .post(url, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then(response => {
            console.log(response.data.assignedCodesss);
            localStorage.setItem('assignedCode', response?.data?.assignedCodesss);
            setData(response.data);
            setAssignedCode(response?.data?.assignedCodesss);
            hasError && setHasError(false);
          })
          .catch(error => {
            console.error('Error uploading the file:', error);
          });
      }
    } else {
      console.log('invalid entry');
    }
  }

  //  async function handleCurrentAffair() {
  //   console.log('CurrentAffairs API called')
  //    try {
  //    const url= SHIKSHA_BASE_URL + API_URL.CURRENTAFFAIRS;
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`API request failed with status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log(data,'daatta')
  // } catch (error) {
  //   console.error("An error occurred:", error);
  //   return null;
  // }
  // }
  // async function handleQuiz() {
  //   console.log('Quiz API called')
  //    try {
  //    const url= SHIKSHA_BASE_URL + API_URL.QUIZ;
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`API request failed with status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log(data,'daattaQuiz')
  // } catch (error) {
  //   console.error("An error occurred:", error);
  //   return null;
  // }
  // }
  // async function handleIq() {
  //   console.log('IQ API called')
  //    try {
  //    const url= SHIKSHA_BASE_URL + API_URL.IQ;
  //   const response = await fetch(url);

  //   if (!response.ok) {
  //     throw new Error(`API request failed with status: ${response.status}`);
  //   }

  //   const data = await response.json();
  //   console.log(data,'daattaIQ')
  // } catch (error) {
  //   console.error("An error occurred:", error);
  //   return null;
  // }
  // }


  return (
    <GlobalLayout isError={false} isLoading={false}>
      <SEO title='ShikshaML &#10095; Dashboard' />

      <section className='flex w-full items-start justify-center gap-[1.6rem]'>
        <div
          className={`${!expand ? 'flex w-[70%]' : 'hidden'
            } flex-col items-start justify-start gap-[1.6rem]`}
        >
          <Card>
            <div className='flex items-center justify-start gap-[1.6rem]'>
              <div className='relative inline-block'>
                <Button
                  variant={'outline-light'}
                  className='flex w-max items-center justify-center '
                  size='small'
                  onClick={toggleDropdown}
                >
                  Filter
                </Button>
                {isOpen && (
                  <div ref={FRef} className="absolute w-[10rem] top-full left-[-1.5rem] mt-2 bg-white border border-gray-300 shadow-sm rounded">
                    {filterData?.categories.map((val: any, index: number) => {
                      return (
                        <label
                          className="block px-4 py-2 cursor-pointer text-gray-60 hover:bg-gray-20"
                          key={index}
                        >
                          <input
                            type="radio"
                            className="mr-2"
                            value={val}
                            checked={selectedCategory === val}
                            onChange={() => handleCategorySelect(val)}
                          />
                          {val}
                        </label>
                      )
                    })}
                  </div>
                )}
              </div>
              {/* -------------------------link uploader-------------------- */}

              <UploaderWrapper tippyContent='Upload YouTube link'>
                <label htmlFor='youtube-uploader' className='relative flex w-full '>
                  <YoutubeIcon className='absolute inset-y-[.8rem] left-[.8rem]' />
                  <input
                    type='text'
                    onPaste={(e) => username !== "Ankit" ? e.preventDefault() : null}
                    // disabled={username !== "Ankit"}
                    id='youtube-uploader'
                    className='!pl-[4.8rem] !pr-[4rem]'
                    placeholder='Video link'
                    value={youtubeLink}
                    autoComplete='off'
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onClick={() => {
                      setShowDropdown(!showDropdown);
                    }}
                  />
                </label>
                {youtubeLink !== '' && (
                  <Close
                    className='absolute inset-y-[1.6rem] right-[1.6rem] h-[1.6rem] w-[1.6rem] cursor-pointer text-gray-60'
                    onClick={() => {
                      handleYoutubeClose();
                    }}
                  />
                )}
                <div className={`relative  ${expand ? 'w-[60vw] m-auto' : 'w-full'} pl-[3rem]`}>
                  <div ref={YRef} className='relative z-10'>
                    {showDropdown && (
                      <div className='absolute top-[0rem] w-[100%] h-[30rem] bg-white border border-gray-300 rounded-lg shadow overflow-y-scroll'>
                        {groupArray.map((val: any, index: number) => {
                          return (
                            <Fragment key={index}>
                              <div className={` $ relative ${' !text-white'} w-full `}>
                                <div className='m-4 w-[95%] text-left h-[auto] text-gray-40 text-body-02 '>
                                  {val.groupName && (
                                    <div>
                                      <p>{val.groupName}</p>
                                      {val.groupDetails.map((child: any, index: number) => {
                                        return (
                                          <p key={index}>
                                            <button
                                              className='py-4 px-2 ml-8 text-body-02 w-[90%] text-gray-80 rounded-lg  hover:bg-gray-20 text-left'
                                              onClick={() => {
                                                // console.log('helllo');
                                                handleBadgeClick(child);
                                                setShowDropdown(!showDropdown);

                                              }}
                                            >
                                              {child.name}
                                            </button>
                                          </p>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </UploaderWrapper>

              {/* -------------------------pdf uploader-------------------- */}
              <UploaderWrapper tippyContent='Upload PDF file'>
                <label
                  htmlFor='pdf-uploader'
                  className={`focus flex w-full  items-center gap-[.8rem] rounded-[.8rem] border border-gray-30 bg-white p-[.8rem] text-gray-80 text-body-02 placeholder:text-gray-40 placeholder:text-body-02
                 hover:border-gray-40 hover:bg-white hover:shadow-gray focus:outline-none  focus-visible:shadow-primary focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-primary-50 active:shadow-primary active:ring-[2px] active:ring-primary-50 `}
                >
                  <UploadIcon />
                  {pdfFile === undefined || pdfFile === null ? (
                    <p className='m text-gray-40 text-body-02'>Upload PDF file</p>
                  ) : (
                    <p className='max-w-[32rem] truncate whitespace-nowrap pr-[4rem] text-gray-80 text-body-02'>
                      {pdfFile?.[0]?.name ? pdfFile?.[0]?.name : pdfname}{' '}
                    </p>
                  )}
                </label>

                {(pdfFile !== null || pdfFile?.length > 0) && (
                  <Close
                    className='absolute inset-y-[1.6rem] right-[1.6rem] h-[1.6rem] w-[1.6rem] cursor-pointer text-gray-60'
                    onClick={() => {
                      handlePDFClose();
                    }}
                  />
                )}

                <div className={`relative w-full pl-[3rem]`}>
                  <div ref={PRef} className='relative z-10'>
                    {drop && (
                      <div className='absolute top-[0rem] w-[100%] h-[30rem] bg-white border border-gray-300 rounded-lg text-black shadow overflow-y-scroll'>
                        {groupArrayPdf.map((val: any, index: number) => {
                          return (
                            <Fragment key={index}>
                              <div className={` $ relative ${' !text-white'} w-full `}>
                                <div className='m-4 w-[95%] text-left h-[auto] text-gray-40 text-body-02 '>
                                  {val.groupName && (
                                    <div>
                                      <p>{val.groupName}</p>
                                      {val.groupDetails.map((child: any, index: number) => {
                                        return (
                                          <p key={index}>
                                            <button
                                              className='py-4 px-2 ml-8 text-body-02 w-[90%] text-gray-80 rounded-lg  hover:bg-gray-20 text-left'
                                              onClick={() => {
                                                console.log('helllo', child);
                                                handleBadgeClickPdf(child);
                                                setDrop(!drop);

                                              }}
                                            >
                                              {child.name}
                                            </button>
                                          </p>
                                        );
                                      })}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}

                      </div>
                    )}
                  </div>
                </div>
              </UploaderWrapper>

              <input
                type='file'
                disabled={username !== "Ankit" ? true : false}
                id='pdf-uploader'
                accept='application/pdf'
                // hidden
                className='hidden'
                key={pdfFile}
                onChange={handlePdf}
              />
              <button className='p-4 rounded-lg border border-gray-30' onClick={() => setDrop(!drop)}><Chevron width={15} height={15} fill='black' /></button>


              <Button
                className='flex w-max items-center justify-center '
                size='large'
                disabled={pdfFile || youtubeLink === '' || isResponseSuccessfull || loading}
                // disabled={pdfFile !== null || youtubeLink !== '' ? false : true}
                onClick={() => {
                  handleFileUpload();
                }}
              >
                {showUpload ? (
                  'Upload'
                ) : loading ? (
                  <>
                    Uploading <UploadIconWithoutBg />
                  </>
                ) : (
                  <>
                    Uploaded
                    <CheckmarkFilled className='h-[1.6rem] w-[1.6rem]' />
                  </>
                )}
              </Button>
            </div>
          </Card>
          {loading === true && (
            <Card
              className={`flex w-full items-center justify-center gap-[.8rem] text-center text-primary-100 text-body-02`}
            >
              {/* {progressBar} */}
              Uploading file <UploadingTransition />
            </Card>
          )}
          {isResponseSuccessfull && (
            <Card className='flex items-center justify-between'>
              <p className='text-gray-80 text-sub-02'>
                {youtubeName}
                {pdfname}
              </p>
              <div className='flex items-center'>

                {!collapse && (
                  <>
                    <Button className='m-2' variant={'outline-light'} onClick={() => setShowTab(!showTab)}>{!showTab ? 'View Less' : 'View Full'}</Button>
                    <button
                      className='flex'
                      onClick={() => {
                        setCollapse(true);
                      }}
                    >

                      <span className='text-gray-80 mx-2 text-body-02 '>Hide</span>
                    </button>
                  </>
                )}
                {collapse && (
                  <button
                    onClick={() => {
                      setCollapse(false);
                    }}
                  >
                    <span className='text-gray-80 text-body-02'>Show</span>
                  </button>
                )}
                {/* <Close
                  className='h-[1.6rem] w-[1.6rem] text-gray-60 mx-2'
                  onClick={() => {
                    localStorage.removeItem('assignedCode');
                    handleYoutubeClose();
                    setData(null);
                    setIsResponseSuccessfull(false);
                    setAssignedCode('');
                    setVideoId('');
                  }}
                /> */}
              </div>
            </Card>
          )}{' '}
          {hasError && (
            <ToastContainer
              title='Error uploading file, please try again.'
              size={'small'}
              variant={'red'}
              actionBtn={
                <Button
                  variant={'ghost-gray'}
                  size='xs'
                  className='flex w-max'
                  onClick={() => {
                    handleFileUpload();
                  }}
                >
                  <RotateIcon /> Retry
                </Button>
              }
            />
          )}
          <Card className={`${!collapse && !pdfFile && !link ? 'min-h-[36rem]' : 'hidden'}   !p-0`}>
            {data === null && videoId === '' && pdfFile === null && !pdfLoaded ? (
              <EmptyPage
                icon={<VideoEmptyIcon />}
                description='Please upload a video link or PDF to see the preview here.'
                pageHeight='min-h-[36rem]'
              />
            ) : (
              <>
                {videoId !== '' && (
                  <iframe
                    title='video'
                    id='player'
                    width='100%'
                    height='360'
                    className='rounded-[.8rem]'
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allowFullScreen
                    allow='accelerometer;autoplay; encrypted-media;'
                  />
                )}
              </>
            )}
          </Card>

          <Card className={`${!link && !collapse && pdfFile ? 'min-h-[36rem]' : 'hidden'}   !p-0`}>
            <iframe
              id='pdfViewerContainer'
              title='PDF Viewer'
              width='100%'
              height='390'
              className='rounded-[.8rem]'
            />
          </Card>

          <Card className={`${link && !pdfFile && !collapse ? 'min-h-[36rem]' : 'hidden'} !p-0`}>
            <iframe
              id='pdfViewerContain'
              src={`${link}#toolbar=0`}
              title='PDF View'
              width='100%'
              height={!showTab ? '650' : '360'}
              className='rounded-[.8rem]'
            />
          </Card>

          <SummaryView load={load} assignedCode={assignedCode} />
        </div>

        <div
          className={`sticky top-0 ${expand ? 'w-[90vw]' : 'w-[30%]'
            } flex-col items-start justify-start gap-[1.6rem]`}
        >
          <Card className='h-[calc(100vh-8rem)]'>
            <div className='flex items-center justify-between'>
              <h1 className='text-primary-60 text-sub-01'>
                <Logo />
              </h1>

              <div>
                <button onClick={() => setExpand(!expand)}>
                  <Expand className='text-gray-60' />
                </button>
              </div>
            </div>

            {/* {assignedCode ? (
              <ChatView
                expand={expand}
                assignedCode={assignedCode}
                isResponseSuccessfull={isResponseSuccessfull}
              />
            ) : (
              <EmptyPage
                icon={<ChatEmptyIcon />}
                description='Ask anything related to the summary of the uploaded video or PDF document.'
                pageHeight='h-[calc(100vh-8rem)]'
              />
            )} */}

            {load === true ? (
              <Generating description='Generating chatbox' />
            ) : assignedCode ? (
              <ChatView
                expand={expand}
                assignedCode={assignedCode}
                isResponseSuccessfull={isResponseSuccessfull}
              />
            ) : (
              <EmptyPage
                icon={<ChatEmptyIcon />}
                description='Ask anything related to the summary of the uploaded video or PDF document.'
                pageHeight='h-[calc(100vh-8rem)]'
              />
            )}
          </Card>
        </div>
      </section>
    </GlobalLayout>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  const user = req.session.user;
  console.log('user', user);
  if (user === undefined) {
    return {
      redirect: { destination: '/flow/login', permanent: false },
    };
  }

  return {
    props: { user: req.session.user ?? null },
  };
}, sessionOptions);
