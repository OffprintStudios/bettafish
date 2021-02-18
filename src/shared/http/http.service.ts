import Axios from 'axios';
import type { AxiosInstance, AxiosPromise, AxiosResponse, CancelTokenSource } from 'axios';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import type { HttpOptions } from './http-options.model';

/**
 * Borrowed heavily from NestJS's HTTP Service implementation.
 * 
 * Source: https://github.com/nestjs/nest/blob/master/packages/common/http/http.service.ts
 */
export class HttpService {
    private instance: AxiosInstance = Axios.create({
        baseURL: `/api`,
        timeout: 1000,
        xsrfCookieName: 'XSRF-TOKEN',
    }); 

    constructor (public token?: string) {   
        this.instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    get AxiosRef(): AxiosInstance {
        return this.instance;
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
                console.log(resp.data);
                return resp.data;
            }),
            catchError((err) => {
                if (onError) {
                    onError(err);
                }
                console.log(err);
                return throwError(err);
            }),
        );
    }

    public request<T = any>(config: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.request, config);
    }

    public get<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.get, `${url}`, config);
    }

    public delete<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.delete, `${url}`, config);
    }

    public head<T = any>(url: string, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.head, `${url}`, config);
    }

    public post<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.post, `${url}`, data, config);
    }

    public put<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.put, `${url}`, data, config);
    }

    public patch<T = any>(url: string, data: any, config?: HttpOptions): Observable<AxiosResponse<T>> {
        return this.generateObservable<T>(this.instance.patch, `${url}`, data, config);
    }

    private generateObservable<T>(Axios: (...args: any[]) => AxiosPromise<T>, ...args: any[]): Observable<AxiosResponse<T>> {
        return new Observable<AxiosResponse<T>>(subscriber => {

            Axios(...args).then(res => {
                subscriber.next(res);
                subscriber.complete();
            }).catch(err => {
                subscriber.error(err);
            });

            return () => {
                return;
            };
        });
    }
}