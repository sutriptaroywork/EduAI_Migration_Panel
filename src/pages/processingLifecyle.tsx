import { Close } from '@/assets/icons';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

// CSS styles for the highlighted cells
const highlightedCellStyles = {
    backgroundColor: 'lightGreen', // Change to your desired highlight color
};

function createData(
    name: any,
    Extraction: any,
    filtering: any,
    condensation: any,
    superCondensation: any,
    vectorization: any,
    summarization: any,
    assesmentGeneration: any,
    recommendedQuestions: any,
) {
    return {
        name,
        Extraction,
        filtering,
        condensation,
        superCondensation,
        vectorization,
        summarization,
        assesmentGeneration,
        recommendedQuestions,
        history: [
            {
                api: '1',
                contentCategory: 'Physics',
                contentType: "video",
                grade: "X/Science/CBSE Board",
                publication: 'Publication 2',
                numberOfPages: 150,
                startTime: '10:30 AM',
                elapsedTime: '1.5 hours',
                endTime: '10:00 PM'
            },

        ],
    };
}

function Row(props: any) {
    const { row }: any = props;
    const [open, setOpen] = React.useState(false);

    const isCellHighlighted = (fieldName: any) => {
        // Customize the highlighting logic based on your criteria
        if (fieldName === 'Extraction' && row.Extraction == 'Extraction Itr 10/100' || fieldName === 'filtering' && row.filtering == 'Filtering Itr 10/100') {
            return true;
        }
        // Add more conditions for highlighting other cells
        return false;
    };
    // async function migrate(data: any) {
    //     console.log(data.assignedCode, 'assigned_code ,assigned_code  ')

    //     try {
    //         const response = await axios.post("http://localhost:3001/api/dashboard/migrate", {
    //             migrationData: data
    //         })

    //         // const response = await axios.post("https://shikshaml.com/devbackend/api/dashboard/migrate", {
    //         //     migrationData: data
    //         // })

    //         console.log("response.data")
    //         console.log(response.data, "response.data")
    //     } catch (error) {
    //         console.log(error)
    //         toast.error("error")

    //     }
    // }

    async function migrate(data: any) {
        console.log(data.assignedCode, 'assigned_code ,assigned_code  ')

        console.log(data, 'datataaaaaaaaaaaaa')
        try {
            const response = await axios.post("http://localhost:3010/api/dashboard/migrate", {
                data
            })

            console.log("response.data")
            console.log(response.data, "response.data")
        } catch (error) {
            console.log(error)
            toast.error("error")

        }
    }
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell
                    component="th"
                    scope="row"
                    style={isCellHighlighted('name') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.contentTitle}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('Extraction') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.extraction}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('filtering') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.filtering}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('condensation') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.condensation}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('superCondensation') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.superCondensation}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('vectorization') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.vectorization}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('summarization') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.summarization}
                </TableCell>
                {/* <TableCell
                    align="right"
                    style={isCellHighlighted('assesmentGeneration') ? highlightedCellStyles : {}}
                >
                    {row.assesmentGeneration}
                </TableCell> */}
                <TableCell
                    align="right"
                    style={isCellHighlighted('recommendedQuestions') ? highlightedCellStyles : {fontSize: '14px'}}
                >
                    {row.recommendedQuestions}
                </TableCell>
                <TableCell
                    align="right"
                    style={isCellHighlighted('Actions') ? highlightedCellStyles : {}}
                >
                    <button style={{ background: '#ffcc02', fontSize: '18px', fontWeight: 'bold', borderRadius: '10px' }} onClick={() => migrate(row)} className='px-4 py-4 rounded'>Migrate</button>
                </TableCell>
                {/* <TableCell
                    align="right"
                    style={isCellHighlighted('endTime') ? highlightedCellStyles : {}}
                >
                    {row.endTime}
                </TableCell> */}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                <span style={{ fontSize: '15px', fontWeight: 'bold', textDecoration: 'underline' }}>Content Details :-</span>
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>API </TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Content Category</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Content Type</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Grade</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Publication</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Number of Pages</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Start Time</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>Elapsed Time</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>End Time</TableCell>
                                        <TableCell style={{ fontSize: '14px', fontWeight: 'bold' }}>AssignedCode</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.api}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.contentCategory}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.contentType}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.grade}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.publication}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.numberOfPages}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.startTime}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.elapsedTime}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.contentDetails.endTime}</TableCell>
                                        <TableCell style={{ fontSize: '14px' }}>{row.assignedCode}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        api: PropTypes.string.isRequired,
        contentCategory: PropTypes.string.isRequired,
        contentType: PropTypes.string.isRequired,
        grade: PropTypes.string.isRequired,
        publication: PropTypes.string.isRequired,
        numberOfPages: PropTypes.number.isRequired,
        startTime: PropTypes.string.isRequired,
        elapsedTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                customerId: PropTypes.string.isRequired,
                amount: PropTypes.number.isRequired,
                totalPrice: PropTypes.number.isRequired,
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};


const customModalStyles = {
    content: {
        width: '50%', // Adjust the width as needed
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        marginTop: "50px"
    },
};
export default function CollapsibleTable() {
    interface RowType {
        api: number,
        subject: string,
        contentTitle: string;
        contentCategory: string; // Change the type based on your actual data type
        // publishers: string; // Change the type based on your actual data type
        grade: string; // Change the type based on your actual data type
        numberOfPages?: number;
        author?: string;
        pulicationYear?: string; // Assuming it's a string, change the type if needed
        publisher?: string;
        ISBN?: string;
        bookDescription?: string;
        topics?: {
            topic: string;
            subtopic: string;
            pageNumber: string;
        }[];
        // Add other properties if needed
    }

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [contentDetails, setContentDetails] = React.useState<any>({});

    // const [processingData, setProcessingData] = React.useState([])
    const [processingData, setProcessingData] = React.useState<Array<RowType>>([]); // Replace YourRowType with the actual type of your rows

    const [contentTitle, setContentTitle] = React.useState("")

    const [pdfFile, setPdfFile] = React.useState<File | null | any>(null);

    const [restrict, setRestrict] = React.useState<any>(false);
    const [resumeProcess, setResumeProcess] = React.useState<any>(false);
    const [title, setTitle] = React.useState<any>(false);
    const [showFile, setShowFile] = React.useState<any>(false);
    const [FileName, setFileName] = React.useState<any>("");
    const [Filesize, setFileSize] = React.useState<any>(null);
    const [file, setFile] = React.useState<any>(null);
    const [link, setLink] = React.useState<any>("");

    const [apiKeys, setApiKeys] = React.useState([])
    const [subject, setSubject] = React.useState([])
    const [grade, setGrade] = React.useState([])
    const [contentCategory, setContentCategory] = React.useState([])
    const [publisher, setPublisher] = React.useState([])



    const onDrop = React.useCallback((acceptedFiles: any) => {
        // Logic to handle the uploaded files
        console.log(acceptedFiles);
        console.log(acceptedFiles[0]);
        setFile(acceptedFiles[0])

        console.log([acceptedFiles[0]], "acceptedFiles<<<<<<<<<<<<<<<<<<<<")
        // if (acceptedFiles[0].name.split(".")[1] === "xlsx" || acceptedFiles[0].name.split(".")[1] === "csv") {
        //     setRestrict(false)
        //     setTitle(true)
        setShowFile(true)
        setFileName(acceptedFiles[0].name)
        //     setFileSize((acceptedFiles[0].size))
        // }

        // else {
        //     setRestrict(true)
        //     setTitle(true)
        // }
        // if (acceptedFiles[0].size / 1024 > 3072) {
        //     setRestrict(true);
        //     setTitle(false);
        // }

    }, []);




    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    //content details form 
    const getInputs = (name: any, value: any) => {
        console.log(name, "value", value, "valueeeeeeee")
        let data = { [name]: value }
        setContentDetails({ ...contentDetails, ...data })
    }
    console.log(contentDetails, "contentdetails")

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        handleClose()

    };
    // const handleSave = async () => {
    //     try {
    //         const response = await axios.post("http://shikshaml.com/backend3/uploadprocess", {
    //             contentTitle, contentDetails
    //         })
    //         console.log(response, "ressss")

    //     } catch (error) {

    //     }
    //     fetchData()

    // }


    const fetchData = async () => {
        const { data } = await axios.get("http://shikshaml.in/backend3/uploadprocess")
        console.log(data, "fetched data")
        setProcessingData(data.content)
    }
    const fetchApi = async () => {
        const { data } = await axios.get("http://shikshaml.in/backend3/apikeys")
        console.log(data, "console apiKeys data")
        console.log(data.api, "console apiKeys data")
        console.log(data.subject, "console apiKeys data")

        setApiKeys(data.api)
        setSubject(data.subject)
        setGrade(data.grades)
        setContentCategory(data.contentCategory)
        setPublisher(data.publisher)

        console.log(apiKeys, "apiKeys data")
        console.log(subject, "subject data")
        console.log(grade, "grade data")
        console.log(contentCategory, "contentCategory data")
        console.log(publisher, "publisher data")

    }
    useEffect(() => {

        fetchData()
        fetchApi()
    }, [])




    // const selectedPdf = (event: { target: any }) => {
    //     console.log(event.target.value, "eventtt")
    //     const fileInput = event.target;
    //     const file = fileInput.files[0];
    //     setPdfFile(file);
    //     console.log(pdfFile, "pdfff")

    // }

    // const handleSelectedPdf = (event: any) => {


    //     const file = event.target.files[0];
    //     setPdfFile(file);
    //     console.log(pdfFile, "pdffffffffff")
    // }


    async function uploadContent(event: { target: any }) {
        // console.log(event.target.value, "eventtt")
        // const allowedExtensions = ['.pdf'];
        // const fileInput = event.target;
        // const file = fileInput.files[0];
        // setPdfFile(file);
        if (selectedValue == "video") {
            try {
                const response = await axios.post("http://shikshaml.in/backend3/upload_youtube", {
                    contentDetails, link, contentTitle
                })
                toast.success("video uploaded")

                console.log("response.data")
                // console.log(response.data, "response.data")
            } catch (error) {
                console.log(error)
                toast.error("error")

            }
        }
        else {

            const updatedContentDetails = {
                ...contentDetails,
                contentType: selectedValue,
                contentTopics: inputValues, // Add your array data here
            };
            console.log(pdfFile, "pdfff")
            // const contentDetails = { abc: "abc", efg: "efg" }
            const formData = new FormData();

            formData.append('pdfFile', file);
            // formData.append('json', JSON.stringify({ contentTitle: contentTitle, contentDetails: { ...contentDetails, contentType: selectedValue } }));
            formData.append('json', JSON.stringify({ contentTitle: contentTitle, contentDetails: updatedContentDetails }));
            console.log('json----->', JSON.stringify({ contentTitle: contentTitle, contentDetails: updatedContentDetails }))
            try {
                await axios.post('http://shikshaml.in/backend3/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                toast.success("pdf uploaded")
                console.log("response.data")

                // alert('File uploaded successfully');
            } catch (error) {
                console.error('Error uploading file:', error);
                toast.error("error")
                console.log("response.data")

                // alert('Error uploading file');
            }
        }

        fetchData()

    }

    const [selectedValue, setSelectedValue] = React.useState('option1'); // Set your default value here

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
        console.log(selectedValue, "value")
    };


    useEffect(() => {
        console.log(selectedValue, "selected value")
    }, [selectedValue])


    type InputValueType = {
        topic: string;
        subtopic: string;
        pageNumber: string;
        [key: string]: string;
    };

    type InputValuesVideoType = {
        topic: string;
        subtopic: string;
        Time: string;
        [key: string]: string;
    };


    const [inputCount, setInputCount] = React.useState(0);
    // const [inputValues, setInputValues] = React.useState<Array<{ topic: string; subtopic: string; pageNumber: string }>>([]);
    const [inputValues, setInputValues] = React.useState<Array<InputValueType>>([]);

    // const [inputValuesVideo, setInputValuesVideo] = React.useState<Array<{ topic: string; subtopic: string; Time: string }>>([]);
    const [inputValuesVideo, setInputValuesVideo] = React.useState<Array<InputValuesVideoType>>([]);

    const [showInputs, setShowInputs] = React.useState(true);




    const addInputFields = () => {
        const newInputValues = [...inputValues, { topic: '', subtopic: '', pageNumber: '' }];
        setInputValues(newInputValues);
        setInputCount(inputCount + 1);
        setShowInputs(true);

    };

    const addInputFieldsVideo = () => {
        const newInputValues = [...inputValuesVideo, { topic: '', subtopic: '', Time: '' }];
        setInputValuesVideo(newInputValues);
        setInputCount(inputCount + 1);
        setShowInputs(true);

    };

    const handleInputChange = (index: number, fieldName: string, value: string) => {
        const newInputValues = [...inputValues];
        newInputValues[index][fieldName] = value;
        setInputValues(newInputValues);
        console.log(inputValues, "inputValues")
    };

    const handleInputChangeVideo = (index: number, fieldName: string, value: string) => {
        const newInputValues = [...inputValuesVideo];
        newInputValues[index][fieldName] = value;
        setInputValuesVideo(newInputValues);
    };
    const handleClose = () => {
        // Reset input values and hide the inputs
        setInputValues([]);
        setShowInputs(false);
        setInputValuesVideo([])
        setContentDetails({})
    };
    return (
        <>
            <div className='flex justify-end'>
                <button style={{ border: '1px solid #ffcc02', background: '#ffcc02', color: '#ffffff', fontSize: '25px', fontWeight: 'bold', borderRadius: '10px' }} className="px-4 py-2 rounded flex justify-end mb-5" onClick={openModal}>Upload Content</button>

            </div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Content Name </TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Extraction</TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Filtering</TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Condensation</TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Super Condensation</TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Vectorization</TableCell>
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Summarization</TableCell>
                            {/* <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Assesment Generation</TableCell> */}
                            <TableCell style={{ fontSize: '17px', fontWeight: 'bold' }}>Recommended Questions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {processingData.map((row: any) => (
                            <Row key={row.contentTitle} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                // className={"h-72 w-64"}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customModalStyles}
            >
                {/* Your modal content here */}
                <h2 style={{ color: '#ffcc02', fontSize: '22px' }} className='font-bold ml-6 '>Add Content</h2>
                {/* <div className='flex justify-end '>

                    <button className="bg-red-500 text-white px-4 py-2 rounded flex justify-end" onClick={closeModal}>Close Modal</button>
                </div> */}
                <Close
                    className='absolute inset-y-[1.6rem] right-[1.6rem] h-[2rem] w-[2rem] cursor-pointer text-white rounded-md bg-red-500'
                    onClick={closeModal}
                />
                {/* <p>test</p> */}
                {resumeProcess ? <div className='ml-20 mt-20 mb-10'><TextField
                    // className='ml-4'
                    label="Assigned Code"
                    variant="outlined"
                    margin="normal"
                    name="assignedCode"
                    onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                />
                    <TextField
                        className='ml-4'
                        label="Extra field"
                        variant="outlined"
                        margin="normal"
                        name="extra"
                        onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                    /></div> : <div className='ml-16'>
                    <TextField
                        className='ml-4 '
                        label="Book title"
                        variant="filled"
                        margin="normal"
                        name="title"
                        onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setContentTitle(e.target.value)}
                        required
                    />
                    <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">Content Type</InputLabel>
                    <Select
                        labelId="contentType"
                        id="select"
                        className='ml-4 h-[65px] w-[200px]'
                        label="contentType"
                        variant="filled"
                        value={selectedValue}
                        onChange={handleChange}

                    >
                        <MenuItem value={'pdf'}>PDF</MenuItem>
                        <MenuItem value={'video'}> Video</MenuItem>
                    </Select>
                    <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">API</InputLabel>
                    <Select
                        labelId="api"
                        id="select"
                        className='ml-4  h-[65px] w-[200px]'
                        label="api"
                        variant="filled"
                        value={0 || contentDetails.api}
                        name="api"
                        onChange={(event) => getInputs(event.target.name, event.target.value)}
                    // onChange={(event: any) => setApiKeys(event.target.value)}

                    >
                        {apiKeys.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>

                    <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">Subjects</InputLabel>

                    <Select

                        // labelId="subjects"
                        id="select"
                        className='ml-4 h-[65px] w-[200px]  text-lg text-black'
                        // label="subjects"
                        variant="filled"
                        value={'' || contentDetails.subject}
                        name='subject'
                        onChange={(event) => getInputs(event.target.name, event.target.value)}
                    >
                        {subject.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">Content Category</InputLabel>
                    <Select
                        labelId="contentCategory"
                        id="select"
                        className='ml-4 h-[65px] w-[200px] text-lg text-black'
                        label="contentCategory"
                        variant="filled"
                        value={'' || contentDetails.contentCategory}
                        name='contentCategory'
                        onChange={(event) => getInputs(event.target.name, event.target.value)}
                    >
                        {contentCategory.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                    {/* <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">Publishers</InputLabel>
                    <Select
                        // labelId="publishers"
                        id="publishers"
                        className='ml-4 h-[65px] w-[200px] text-lg text-black'
                        label="publishers"
                        variant="filled"
                        value={'' || contentDetails.publishers}
                        name='publishers'
                        onChange={(event) => getInputs(event.target.name, event.target.value)}
                    >
                        {publisher.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select> */}
                    <InputLabel className='ml-4 mt-8 text-lg text-black'
                        id="subjects-label">Grade</InputLabel>
                    <Select
                        labelId="grade"
                        id="select"
                        className='ml-4 h-[65px] w-[200px]'
                        label="grade"
                        variant="filled"
                        value={'' || contentDetails.grade}
                        name='grade'
                        onChange={(event) => getInputs(event.target.name, event.target.value)}
                    >
                        {grade.map((item, index) => (
                            <MenuItem key={index} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>


                    {selectedValue == "pdf" ? <>

                        <TextField
                            className=' space-x-3'
                            label="Number of Pages"
                            type="number"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.numberOfPages}

                            name="numberOfPages"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                            required
                        />
                        <TextField
                            className='ml-4'
                            label="Author"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.author}
                            name="author"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                            required
                        />
                        <TextField
                            className=' space-x-3'
                            label="Publication year"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.pulicationYear}
                            name="pulicationYear"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                            required
                        />
                        <TextField
                            className='ml-4'
                            label="Publisher"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.publisher}
                            name="publisher"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                            required
                        />
                        <TextField
                            className=' space-x-3'
                            label="ISBN"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.ISBN}
                            name="ISBN"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                        />
                        <TextField
                            className='ml-4'
                            label="Book description"
                            variant="filled"
                            margin="normal"
                            value={'' || contentDetails.bookDescription}
                            name="bookDescription"
                            onChange={(event: { target: { name: any; value: any; }; }) => getInputs(event.target.name, event.target.value)}
                        />

                        {showInputs && inputValues.map((input, index) => (
                            <div key={index}>
                                <TextField
                                    label="Topic"
                                    type="text"
                                    value={input.topic}
                                    onChange={(e: { target: { value: string; }; }) => handleInputChange(index, 'topic', e.target.value)}
                                    style={{ width: '30%', marginTop: "10px" }}
                                    // className='ml-4 h-[65px] w-[200px] mt-6'
                                    name="topic"

                                />

                                <TextField
                                    type="text"
                                    label="Sub Topic"
                                    value={input.subtopic}
                                    onChange={(e: { target: { value: string; }; }) => handleInputChange(index, 'subtopic', e.target.value)}
                                    style={{ width: '30%', marginTop: "10px", marginLeft: "6px" }}
                                    name="subtopic"
                                // className='ml-4 h-[65px] w-[200px] mt-6'

                                />

                                <TextField
                                    type="text"
                                    label="Page Number"
                                    value={input.pageNumber}
                                    onChange={(e: { target: { value: string; }; }) => handleInputChange(index, 'pageNumber', e.target.value)}
                                    style={{ width: '30%', marginTop: "10px", marginLeft: "6px" }}
                                    name="pageNumber"
                                // className='ml-4 h-[65px] w-[200px] mt-6'

                                />
                            </div>
                        ))}

                        {/* Render Add button */}
                        <button onClick={addInputFields} className='text-gray-80 font-semibold ml-4 mt-20 mb-6 border-2 p-2 '>Add Topic <span className='text-2xl'>+</span></button>
                        {/* Render Close button */}
                        {showInputs && <button onClick={handleClose} className='text-gray-80 font-semibold ml-4 mt-20 border-2 p-2 '>Remove Topic <span className='text-2xl'>-</span></button>
                        }

                    </> :
                        <><TextField
                            className='ml-4 mt-8'
                            label="Youtube Link"
                            variant="filled"
                            margin="normal"
                            name="youtubeLink"
                            onChange={(e: { target: { value: any; }; }) => setLink(e.target.value)}
                            required
                        />
                            {showInputs && inputValuesVideo.map((input, index) => (
                                <div key={index}>
                                    <TextField
                                        label="Topic"
                                        type="text"
                                        value={input.topic}
                                        onChange={(e: { target: { value: string; }; }) => handleInputChangeVideo(index, 'topic', e.target.value)}
                                        style={{ width: '30%', marginTop: "10px", marginLeft: "6px" }}
                                        // className='ml-4 h-[65px] w-[200px] mt-6'
                                        name="api"

                                    />

                                    <TextField
                                        type="text"
                                        label="Sub Topic"
                                        value={input.subtopic}
                                        onChange={(e: { target: { value: string; }; }) => handleInputChangeVideo(index, 'subtopic', e.target.value)}
                                        style={{ width: '30%', marginTop: "10px", marginLeft: "6px" }}
                                        name="api"
                                    // className='ml-4 h-[65px] w-[200px] mt-6'

                                    />

                                    <TextField
                                        type="text"
                                        label="Time"
                                        value={input.Time}
                                        onChange={(e: { target: { value: string; }; }) => handleInputChangeVideo(index, 'Time', e.target.value)}
                                        style={{ width: '30%', marginTop: "10px", marginLeft: "6px" }}
                                        name="time"
                                    // className='ml-4 h-[65px] w-[200px] mt-6'

                                    />
                                </div>
                            ))}

                            {/* Render Add button */}
                            <button onClick={addInputFieldsVideo} className='text-gray-80 font-semibold ml-4 mt-20 mb-6 border-2 p-2 '>Add Topic <span className='text-2xl'>+</span></button>
                            {/* Render Close button */}
                            {showInputs && <button onClick={handleClose} className='text-gray-80 font-semibold ml-4 mt-20 border-2 p-2 '>Remove Topic <span className='text-2xl'>-</span></button>
                            } </>}
                    3



                    {/* <input
                        className='ml-4 h-24 w-52'
                        type='file'
                        id='pdf-uploader'
                        accept='application/pdf'
                        key={"pdfFile"}
                        onChange={handleSelectedPdf}
                    /> */}

                    {selectedValue == "pdf" ? <div  {...getRootProps()} className={`p-16 ml-8 mt-4 h-[60px] w-[390px] border-2 border-dashed rounded-md ${isDragActive ? 'bg-gray-100' : 'bg-white'}`}
                    >
                        <input {...getInputProps()} />
                        <></>
                        <p className='text-gray-500 text-2xl flex justify-center mb-1'> Browse File or Drag & drop to upload file </p>
                    </div> : null}


                </div>}
                <button
                    style={{ background: '#ffcc02', fontSize: '18px' }}
                    // type='submit'
                    className='rounded-lg text-white mt-8 ml-20 px-4 py-4'
                    // size='small'
                    onClick={uploadContent}
                >
                    {"Upload"}
                </button>
                {!resumeProcess ? <button
                    style={{ background: '#ffcc02', fontSize: '18px' }}
                    // type='submit'
                    className='rounded-lg text-white mt-8 ml-20 px-4 py-4'
                    // size='small'
                    onClick={() => setResumeProcess(!resumeProcess)}
                >
                    {"Resume Process"}
                </button> : <button
                    style={{ background: '#ffcc02', fontSize: '18px' }}
                    // type='submit'
                    className='rounded-lg text-white mt-8 ml-20 px-4 py-4'
                    // size='small'
                    onClick={() => setResumeProcess(!resumeProcess)}
                >
                    {"Close Resume"}
                </button>}

                {/* <ToastContainer
                    // title='Error uploading file, please try again.'
                    // size={'small'}
                    // variant={'red'}
                    // actionBtn={
                    //     <Button
                    //         variant={'ghost-gray'}
                    //         size='xs'
                    //         className='flex w-max'
                    //     // onClick={() => {
                    //     //     handleFileUpload();
                    //     // }}
                    //     >
                    //     </Button>
                    // }
                /> */}





            </Modal>
        </>

    );
}

// working collapsible table
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import PropTypes from 'prop-types';
// import * as React from 'react';

// function createData(name: any, calories: any, fat: any, carbs: any, protein: any, price: any) {
//     return {
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//         price,
//         history: [
//             {
//                 date: '2020-01-05',
//                 customerId: '11091700',
//                 amount: 3,
//             },
//             {
//                 date: '2020-01-02',
//                 customerId: 'Anonymous',
//                 amount: 1,
//             },
//         ],
//     };
// }

// function Row(props: any) {
//     const { row } = props;
//     const [open, setOpen] = React.useState(false);

//     return (
//         <React.Fragment>
//             <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//                 <TableCell>
//                     <IconButton
//                         aria-label="expand row"
//                         size="small"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                     </IconButton>
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                     {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
//                 <TableCell align="right">{row.carbs}</TableCell>
//                 <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//             <TableRow>
//                 <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//                     <Collapse in={open} timeout="auto" unmountOnExit>
//                         <Box sx={{ margin: 1 }}>
//                             <Typography variant="h6" gutterBottom component="div">
//                                 History
//                             </Typography>
//                             <Table size="small" aria-label="purchases">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Date</TableCell>
//                                         <TableCell>Customer</TableCell>
//                                         <TableCell align="right">Amount</TableCell>
//                                         <TableCell align="right">Total price ($)</TableCell>
//                                     </TableRow>
//                                 </TableHead>
//                                 <TableBody>
//                                     {row.history.map((historyRow: any) => (
//                                         <TableRow key={historyRow.date}>
//                                             <TableCell component="th" scope="row">
//                                                 {historyRow.date}
//                                             </TableCell>
//                                             <TableCell>{historyRow.customerId}</TableCell>
//                                             <TableCell align="right">{historyRow.amount}</TableCell>
//                                             <TableCell align="right">
//                                                 {Math.round(historyRow.amount * row.price * 100) / 100}
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </Box>
//                     </Collapse>
//                 </TableCell>
//             </TableRow>
//         </React.Fragment>
//     );
// }

// Row.propTypes = {
//     row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//     createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//     createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//     createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//     return (
//         <TableContainer component={Paper}>
//             <Table aria-label="collapsible table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell />
//                         <TableCell>Dessert (100g serving)</TableCell>
//                         <TableCell align="right">Calories</TableCell>
//                         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                         <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <Row key={row.name} row={row} />
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }


// import { Box, LinearProgress } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const Data = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // Define your custom getRowId function
//     const getRowId = (row: any) => row._id;


//     useEffect(() => {
//         // Make an Axios GET request to fetch data from your backend API
//         axios
//             .get('http://164.52.218.107/backend3/fetchtranscriptions')
//             .then((response) => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false);
//             });
//     }, []);


//     const handleEdit = async (updatedRow: any, original: any) => {
//         try {
//             const result = await axios.put('http://164.52.218.107/backend3/transcriptions', updatedRow)
//             console.log(result, "resss")
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     if (loading) {
//         return (
//             <div>
//                 <LinearProgress />
//             </div>
//         );
//     }

//     return (
//         <>
//             <h1>Data</h1>
//             <p className="text-blue-100 text-2xl font-semibold">
//                 The bestest of data available
//             </p>
//             <div style={{ height: '900px', width: '100%' }}>
//                 <Box
//                     sx={{
//                         // height: 300,
//                         width: '100%',
//                         '& .cold': {
//                             backgroundColor: '#b9d5ff91',
//                             color: '#1a3e72',
//                         },
//                         '& .hot': {
//                             backgroundColor: '#ff943975',
//                             color: '#1a3e72',
//                         },
//                     }}
//                 >
//                     <DataGrid
//                         rows={data}
//                         columns={[
//                             { field: '_id', headerName: '_id', width: 200 },
//                             { field: 'assigned_code', headerName: 'assigned_code', width: 200 },
//                             { field: 'type', headerName: 'type', width: 200 },
//                             { field: 'name', headerName: 'Name', width: 200, editable: true },
//                             { field: 'category', headerName: 'category', width: 200, editable: true },
//                             { field: 'arrayOfArrays', headerName: 'arrayOfArrays', width: 200, editable: true },
//                             // Add other columns here
//                         ]}

//                         getRowId={getRowId}
//                         // processRowUpdate={(updatedRow, originalRow) => console.log(updatedRow)}
//                         getCellClassName={(params) => {
//                             if (params.field === 'category') {
//                                 return params.value == "Geometry" ? 'hot' : 'cold';
//                             }
//                             return ""
//                         }}
//                         processRowUpdate={handleEdit}
//                         onProcessRowUpdateError={(err) => console.log(err)}

//                     // editMode="cell"
//                     // onEditCellChange={handleEditCellChange}
//                     // loading={false}
//                     // slots={{
//                     //     loadingOverlay: LinearProgress,
//                     // }}
//                     />
//                 </Box>

//             </div>
//         </>
//     );
// };

// export default Data;




















// // static data editable table
// // import { LinearProgress } from "@mui/material";
// // import { DataGrid, GridEditCellProps } from "@mui/x-data-grid";
// // import { useCallback, useState } from "react";

// // const Data: React.FC = () => {
// //     // Generate some custom data
// //     const customData = {
// //         columns: [
// //             { field: 'id', headerName: 'ID', width: 70, editable: true },
// //             { field: 'name', headerName: 'Name', width: 130, editable: true },
// //             // Add other columns here
// //         ],
// //         rows: [
// //             { id: 1, name: 'John' },
// //             { id: 2, name: 'Doe' },
// //             // Add more rows here
// //         ],
// //     };

// //     const getRowId = (row: any) => row.id; // Define your custom getRowId function

// //     const [rows, setRows] = useState(customData.rows);

// //     const handleEditCellChange = useCallback(
// //         (params: GridEditCellProps) => {
// //             const { id, field, value } = params;
// //             const updatedRows = rows.map((row) => {
// //                 if (row.id === id) {
// //                     return { ...row, [field]: value };
// //                 }
// //                 return row;
// //             });
// //             setRows(updatedRows);
// //         },
// //         [rows]
// //     );

// //     return (
// //         <>
// //             <h1>Data</h1>
// //             <p className="text-blue-100 text-2xl font-semibold">
// //                 The bestest of data available
// //             </p>
// //             <div style={{ height: "900px", width: "100%" }}>
// //                 <DataGrid
// //                     rows={rows}
// //                     columns={customData.columns}
// //                     getRowId={getRowId}
// //                     editMode="row"
// //                     onEditCellChange={handleEditCellChange}
// //                     loading={false}
// //                     slots={{
// //                         loadingOverlay: LinearProgress,
// //                     }}
// //                 />
// //             </div>
// //         </>
// //     );
// // };

// // export default Data;

// // no row table
// // import { LinearProgress } from "@mui/material";
// // import { DataGrid, GridEditCellProps } from "@mui/x-data-grid";
// // import { useDemoData } from "@mui/x-data-grid-generator";
// // import { useCallback, useState } from "react";

// // const Data: React.FC = () => {
// //     const { data } = useDemoData({
// //         dataSet: "Commodity",
// //         rowLength: 20,
// //         maxColumns: 6,
// //     });
// //     console.log(data, "dataaa>>>>")

// //     const getRowId = (row: any) => row.id; // Define your custom getRowId function

// //     const [rows, setRows] = useState(data.rows);

// //     const handleEditCellChange = useCallback(
// //         ({ id, field, props }: GridEditCellProps) => {
// //             const updatedRows = rows.map((row) => {
// //                 if (row.id === id) {
// //                     return { ...row, [field]: props.value };
// //                 }
// //                 return row;
// //             });
// //             setRows(updatedRows);
// //         },
// //         [rows]
// //     );

// //     return (
// //         <>
// //             <h1>Data</h1>
// //             <p className="text-blue-100 text-2xl font-semibold">
// //                 The bestest of data available
// //             </p>
// //             <div style={{ height: "900px", width: "100%" }}>
// //                 <DataGrid
// //                     {...data}
// //                     rows={rows}
// //                     columns={data.columns}
// //                     getRowId={getRowId}
// //                     editMode="row"
// //                     onEditCellChange={handleEditCellChange}
// //                     loading={!data}
// //                     slots={{
// //                         loadingOverlay: LinearProgress,
// //                     }}
// //                 />
// //             </div>
// //         </>
// //     );
// // };

// // export default Data;

// // // import LinearProgress from "@mui/material/LinearProgress";
// // // import { DataGrid } from "@mui/x-data-grid";
// // // import { useDemoData } from "@mui/x-data-grid-generator";
// // // import * as React from "react";

// // // const Data: React.FC = () => {
// // //     const { data } = useDemoData({
// // //         dataSet: "Commodity",
// // //         rowLength: 20,
// // //         maxColumns: 10,
// // //     });

// // //     return (
// // //         <>
// // //             <h1>Data</h1>
// // //             <p className="text-blue-100 text-2xl font-semibold">
// // //                 The bestest of data available
// // //             </p>
// //             // <div style={{ height: "900px", width: "100%" }}>
// //             //     <DataGrid
// //             //         slots={{
// //             //             loadingOverlay: LinearProgress,
// //             //         }}
// //             //         loading={!data}
// //             //         {...data}
// //             //     />
// //             // </div>
// // //         </>
// // //     );
// // // };

// // // export default Data;