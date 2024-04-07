import { LinearProgress } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Data = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Define your custom getRowId function
    const getRowId = (row: any) => row._id;


    useEffect(() => {
        // Make an Axios GET request to fetch data from your backend API
        axios
            .get('http://164.52.218.107/backend3/fetchtranscriptions')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);


    const handleEdit = async (updatedRow: any, original: any) => {
        try {
            const result = await axios.put('http://164.52.218.107/backend3/transcriptions', updatedRow)
            console.log(result, "resss")
        } catch (error) {
            console.log(error)
        }
    }
    if (loading) {
        return (
            <div>
                <LinearProgress />
            </div>
        );
    }

    return (
        <>
            <h1>Data</h1>
            <p className="text-blue-100 text-2xl font-semibold">
                The bestest of data available
            </p>
            <div style={{ height: '900px', width: '100%' }}>
                <DataGrid
                    rows={data}
                    columns={[
                        { field: '_id', headerName: '_id', width: 200 },
                        { field: 'assigned_code', headerName: 'assigned_code', width: 200 },
                        { field: 'type', headerName: 'type', width: 200 },
                        { field: 'name', headerName: 'Name', width: 200, editable: true },
                        { field: 'category', headerName: 'category', width: 200, editable: true },
                        { field: 'arrayOfArrays', headerName: 'arrayOfArrays', width: 200, editable: true },
                        // Add other columns here
                    ]}
                    getRowId={getRowId}
                    // processRowUpdate={(updatedRow, originalRow) => console.log(updatedRow)}
                    processRowUpdate={handleEdit}
                    onProcessRowUpdateError={(err) => console.log(err)}

                // editMode="cell"
                // onEditCellChange={handleEditCellChange}
                // loading={false}
                // slots={{
                //     loadingOverlay: LinearProgress,
                // }}
                />
            </div>
        </>
    );
};

export default Data;




















// static data editable table
// import { LinearProgress } from "@mui/material";
// import { DataGrid, GridEditCellProps } from "@mui/x-data-grid";
// import { useCallback, useState } from "react";

// const Data: React.FC = () => {
//     // Generate some custom data
//     const customData = {
//         columns: [
//             { field: 'id', headerName: 'ID', width: 70, editable: true },
//             { field: 'name', headerName: 'Name', width: 130, editable: true },
//             // Add other columns here
//         ],
//         rows: [
//             { id: 1, name: 'John' },
//             { id: 2, name: 'Doe' },
//             // Add more rows here
//         ],
//     };

//     const getRowId = (row: any) => row.id; // Define your custom getRowId function

//     const [rows, setRows] = useState(customData.rows);

//     const handleEditCellChange = useCallback(
//         (params: GridEditCellProps) => {
//             const { id, field, value } = params;
//             const updatedRows = rows.map((row) => {
//                 if (row.id === id) {
//                     return { ...row, [field]: value };
//                 }
//                 return row;
//             });
//             setRows(updatedRows);
//         },
//         [rows]
//     );

//     return (
//         <>
//             <h1>Data</h1>
//             <p className="text-blue-100 text-2xl font-semibold">
//                 The bestest of data available
//             </p>
//             <div style={{ height: "900px", width: "100%" }}>
//                 <DataGrid
//                     rows={rows}
//                     columns={customData.columns}
//                     getRowId={getRowId}
//                     editMode="row"
//                     onEditCellChange={handleEditCellChange}
//                     loading={false}
//                     slots={{
//                         loadingOverlay: LinearProgress,
//                     }}
//                 />
//             </div>
//         </>
//     );
// };

// export default Data;

// no row table
// import { LinearProgress } from "@mui/material";
// import { DataGrid, GridEditCellProps } from "@mui/x-data-grid";
// import { useDemoData } from "@mui/x-data-grid-generator";
// import { useCallback, useState } from "react";

// const Data: React.FC = () => {
//     const { data } = useDemoData({
//         dataSet: "Commodity",
//         rowLength: 20,
//         maxColumns: 6,
//     });
//     console.log(data, "dataaa>>>>")

//     const getRowId = (row: any) => row.id; // Define your custom getRowId function

//     const [rows, setRows] = useState(data.rows);

//     const handleEditCellChange = useCallback(
//         ({ id, field, props }: GridEditCellProps) => {
//             const updatedRows = rows.map((row) => {
//                 if (row.id === id) {
//                     return { ...row, [field]: props.value };
//                 }
//                 return row;
//             });
//             setRows(updatedRows);
//         },
//         [rows]
//     );

//     return (
//         <>
//             <h1>Data</h1>
//             <p className="text-blue-100 text-2xl font-semibold">
//                 The bestest of data available
//             </p>
//             <div style={{ height: "900px", width: "100%" }}>
//                 <DataGrid
//                     {...data}
//                     rows={rows}
//                     columns={data.columns}
//                     getRowId={getRowId}
//                     editMode="row"
//                     onEditCellChange={handleEditCellChange}
//                     loading={!data}
//                     slots={{
//                         loadingOverlay: LinearProgress,
//                     }}
//                 />
//             </div>
//         </>
//     );
// };

// export default Data;

// // import LinearProgress from "@mui/material/LinearProgress";
// // import { DataGrid } from "@mui/x-data-grid";
// // import { useDemoData } from "@mui/x-data-grid-generator";
// // import * as React from "react";

// // const Data: React.FC = () => {
// //     const { data } = useDemoData({
// //         dataSet: "Commodity",
// //         rowLength: 20,
// //         maxColumns: 10,
// //     });

// //     return (
// //         <>
// //             <h1>Data</h1>
// //             <p className="text-blue-100 text-2xl font-semibold">
// //                 The bestest of data available
// //             </p>
//             // <div style={{ height: "900px", width: "100%" }}>
//             //     <DataGrid
//             //         slots={{
//             //             loadingOverlay: LinearProgress,
//             //         }}
//             //         loading={!data}
//             //         {...data}
//             //     />
//             // </div>
// //         </>
// //     );
// // };

// // export default Data;
