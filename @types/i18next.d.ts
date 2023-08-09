import resources from './resources';
import 'i18next'

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: typeof resources;
    }
}