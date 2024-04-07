import { Dispatch, SetStateAction } from 'react';

export function handleFileValidation(
  FileVal: File | any,
  csvData: Dispatch<any>,
  csvError: Dispatch<SetStateAction<string>>,
) {
  console.log('csvError', csvError);
  const allowedExtensions = ['.csv', '.xlsx'];
  const fileInput: HTMLInputElement | any = document.getElementById('csv-uploader');
  const file = FileVal?.[0];
  const fileExtension = file?.name?.substring(file?.name?.lastIndexOf('.')).toLowerCase();
  // console.log('handleFileValidation', allowedExtensions?.includes(fileExtension), fileExtension);

  if (!allowedExtensions?.includes(fileExtension)) {
    csvError('Please upload a CSV or XLSX file.');
    fileInput.value = '';
  } else {
    csvData(FileVal);
    csvError('');
  }
}
