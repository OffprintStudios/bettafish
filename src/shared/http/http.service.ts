import Axios from 'axios';
import type { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import type { HttpOptions } from './http-options.model';

/**
 * Borrowed heavily from NestJS's HTTP Service implementation.
 * 
 * Source: https://github.com/nestjs/nest/blob/master/packages/common/http/http.service.ts
 */
export class HttpService {
    private instance: AxiosInstance = Axios.create({
        timeout: 1000,
        xsrfCookieName: 'XSRF-TOKEN',
        withCredentials: true
    });

    private static generateObservable<T>(Axios: (...args: any[]) => AxiosPromise<T>, ...args: any[]): Observable<AxiosResponse<T>> {
        return from(Axios(...args));
    }

    constructor (public token?: string) {   
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    public handleRequest<T>(
        response: Observable<AxiosResponse<T>>,
        onSuccess: (success: AxiosResponse<T>) => void = null,
        onError: (error: any) => void = null,
    ): Observable<T> {
        return response.pipe(
            map((resp) => {
                if (onSuccess) {
                    onSuccess(resp);
                }
                return resp.data;
            }),
            catchError((err) => {
                if (onError) {
                    onError(err);
                }
                return throwError(err);
            }),
        );
    }

    public request<T = any>(config: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.request, config);
    }

    public get<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.get, `${url}`, config);
    }

    public delete<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.delete, `${url}`, config);
    }

    public head<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.head, `${url}`, config);
    }

    public post<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.post, `${url}`, data, config);
    }

    public put<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.put, `${url}`, data, config);
    }

    public patch<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return HttpService.generateObservable<T>(this.instance.patch, `${url}`, data, config);
    }
}
