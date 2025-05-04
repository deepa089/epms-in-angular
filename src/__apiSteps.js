/**
 * 1. create a module file which api data set as a list or map of data.  command : ng g class file_name
 * 2. create a service file in the src directory. command : ng g s file_name 
 * 3. in add.module.ts import HttpClientModule from @angular/common/http and add it to imports array.
 * 4. in the service file import HttpClient and inject it in the constructor.
 * 5. set baseUrl where data is coming from in the service file.
 * 6. create a method in the service file to get data from the API using HttpClient.
 * 7. create a method in the service file to post data to the API using HttpClient.
 * 8. create a method in the service file to put data to the API using HttpClient.
 * 9. create a method in the service file to delete data from the API using HttpClient.
 * 10. create a method in the service file to get data by id from the API using HttpClient.
 * 11. go to any service file and see how to use the service file to get data from the API.
 * 12. in component, add service in constructor and call the method to get data from the API.
 * 
 */

/**
 * Set environment
 * Step 1: Set in environment files
 * 
 *  ``` // src/environments/environment.ts (development)
                export const environment = {
                production: false,
                apiBaseUrl: 'http://localhost:8080/api'
                };

                // src/environments/environment.prod.ts (production)
                export const environment = {
                production: true,
                apiBaseUrl: 'https://api.yourdomain.com/api'
                };

    ```

    Step 2: Create an API configuration service
    ```
        // src/app/core/services/api-config.service.ts
        import { Injectable } from '@angular/core';
        import { environment } from '../../../environments/environment';

        @Injectable({
        providedIn: 'root'
        })
        export class ApiConfigService {
        get baseUrl(): string {
            return environment.apiBaseUrl;
        }
        }
    ```

    Step 3: Use in other services

    ```
        import { Injectable } from '@angular/core';
        import { HttpClient } from '@angular/common/http';
        import { ApiConfigService } from './api-config.service';

        @Injectable({
        providedIn: 'root'
        })
        export class UserService {
        constructor(
            private http: HttpClient,
            private apiConfig: ApiConfigService
        ) {}

        getUsers() {
            return this.http.get(`${this.apiConfig.baseUrl}/users`);
        }
        }
    ```
 */