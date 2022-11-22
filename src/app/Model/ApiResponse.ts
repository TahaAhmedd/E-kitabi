export class ApiResponse{
    data:[]=[];
    success="";
    message=true;
    status=true;
}

export class ApiResultBookById{
    data:{}={};
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
