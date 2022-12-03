import { text } from "express";

export class ApiResponse{
    data:[]=[];
    success="";
    message=true;
    status=true;
    dataLinkOuter:[]=[];
    dataLinksInner:[]=[];
}
export class ApiResponse0{
    data:DataBookResult[];
    success=true;
    message='';
    d:{}={}
    
}

export class ApiRespaginat{
    data:DataPagination;
    success="";
    message=true;
    status=true;
}
export class ApiResultBookById{
    data:{}={};
    dd:{}={}
}

export class DataBookResult{
    _id:number;
    title:string;
    description:string;
    categoryName:string;
    keywords:[];
    createdAt:string;
    updatedAt:string;
    cover:string;
    link:string;
    innerLinks:[{}]
    outerLinks:[{}]
}

export class datres{
text:string
link:string
}
export interface DataPagination{
    noOfPages:number,
    pageNumber :Number ,
    paginatedData:[],

}
