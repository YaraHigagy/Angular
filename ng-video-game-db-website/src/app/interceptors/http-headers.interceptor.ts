import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
   constructor() {}
   
   // my key:
    // intercept(
    //     req: HttpRequest<any>, 
    //     next: HttpHandler
    //     ): Observable<HttpEvent<any>> {
    //     req = req.clone({
    //         setHeaders: {
    //             'X-RapidAPI-Key': '9c94e8afd0msh4244aff5bec7072p128b2ajsn083cb63f1bd7',
    //             'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
    //         },
    //         setParams: {
    //             key: '6fceb35a4ff0490a9d3aa9a2079fe7c4',
    //         }
    //     });
    //     return next.handle(req);
    // }


    // the instructor's key:
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        req = req.clone({
          setHeaders: {
            'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
            'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          },
          setParams: {
            key: 'e40e743af2c94b0c916a8aa618fb4473',
          }
        });
        return next.handle(req);
      }

}