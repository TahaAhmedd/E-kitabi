export class ApiResponse{
    data:[]=[];
    success="";
    message=true;
    status=true;
}


export interface DataBookResult{
    _id:number;
    title:string;
    description:string;
    categoryName:string;
    keywords:[];
    createdAt:string;
    updatedAt:string;
    cover:string;
    link:string
}

// {
//     "_id": "63793c52ee436ce8f3bf5290",
//     "title": "Test",
//     "description": "Test Des",
//     "categoryName": "test1",
//     "keywords": [
//         "test"
//     ],
//     "createdAt": "2022-11-19T20:28:03.042Z",
//     "updatedAt": "2022-11-19T20:28:03.114Z",
//     "cover": "http://localhost:4000/images/blaz-photo-zMRLZh40kms-unsplash.png",
//     "link": "http://localhost:4000/files/لوجو صنايعي3.pdf"
// }