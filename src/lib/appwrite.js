import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.REACT_APP_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
