# PDF Editing Web Application

Welcome to the PDF Editing Web Application documentation. This web application allows users to store, edit, and access PDF files from anywhere, anytime.

[Visit our PDF Editing Website](https://www.example.com)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Authentication](#authentication)
5. [File Upload and Storage](#file-upload-and-storage)
6. [Database Structure](#database-structure)
7. [Editing PDFs](#editing-pdfs)
8. [Downloads](#downloads)
9. [API Endpoints](#api-endpoints)
10. [Testing](#testing)
11. [Deployment](#deployment)
12. [Support and Contact](#support-and-contact)
13. [License](#license)

## Features<a name="features"></a>

- Upload and store PDF files securely in the cloud.
- Edit PDF files online from any device.
- User authentication and authorization with JWT tokens.
- MongoDB database for storing user details and PDF file metadata.
- Automatic download of edited PDF files.

## Technologies Used<a name="technologies-used"></a>

- Front-End: Next.js, Tailwind CSS, Shadcn UI libraries.
- Back-End: Node.js, Express, MongoDB.
- Authentication: JWT tokens.
- File Upload: Uploadthing.
- Database: MongoDB.

## Getting Started<a name="getting-started"></a>

### Prerequisites<a name="prerequisites"></a>

- Node.js and npm (Node Package Manager).
- MongoDB installed and running.
- Environment variables for configuration (e.g., ALLOWED_ORIGINS).
- add .env.local file and add env variables for uploadthing.

### Installation<a name="installation"></a>

1. Clone this repository.
2. Install dependencies: `npm install`.
3. Set environment variables.
4. Start the application: `npm run dev`.

## Authentication<a name="authentication"></a>

- Users can register, log in, and obtain JWT tokens for secure access.
- Demo account also provided in Login Page.Feel free to use it.

## File Upload and Storage<a name="file-upload-and-storage"></a>

- PDF files are uploaded and securely stored in the cloud.
- Files are Stored using ##uploadthing.

## Database Structure<a name="database-structure"></a>

- MongoDB is used to store user details and PDF file metadata.
- Two Routes are used one for handle Userdetails anothe one for handling PdfDetails.

## Editing PDFs<a name="editing-pdfs"></a>

- User can user their email credentials to create a account.
- After successful login users can upload theri files to cloud.
- on successfull updation the file will showed in file manager page.
- user can select file and edit by clicking the edit button.
- user willbe redirected to edit page.User can select pages they want to keep.
- Navigation button is provided in the Top navigation bar.
- After selecting the download button will appear by clicking the download button file will download automatically.

## Downloads<a name="downloads"></a>

- By clicking the Download Button the file downloaded .

## API Endpoints<a name="api-endpoints"></a>

- List and describe the main API endpoints used in the application.
- Include request/response examples and expected data formats.

## Testing<a name="testing"></a>

- Describe how to test the application, including unit tests and end-to-end testing.
- Mention any testing frameworks or tools used.

## Deployment<a name="deployment"></a>

- Provide instructions on how to deploy the application to a production environment.
- Mention hosting options and configuration.

## Support and Contact<a name="support-and-contact"></a>

- For support, reporting issues, or contacting our team, please visit [our support page](#).

## License<a name="license"></a>

- This project is licensed under the [LICENSE NAME] - see the [LICENSE.md](LICENSE.md) file for details.
