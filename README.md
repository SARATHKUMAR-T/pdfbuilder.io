# PDF Editing Web Application

Welcome to the PDF Editing Web Application documentation. This web application allows users to store, edit, and access PDF files from anywhere, anytime.
visit the live website:
[Visit PDFBuilder.io](https://pdfbuilder-io.vercel.app/)

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
4. [Authentication](#authentication)
5. [File Upload and Storage](#file-upload-and-storage)
6. [Database Structure](#database-structure)
7. [Editing PDFs](#editing-pdfs)
8. [Downloads](#downloads)
9. [Deployment](#deployment)
10. [Backend] (#backend)


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

- By clicking the Download Button the file willbe downloaded .



## Deployment<a name="deployment"></a>

- For deployment i used Vercel.

## Backend<a name="backend"></a>

-Express is used on the top of Nodejs.

[Backend github link](https://github.com/SARATHKUMAR-T/pdf_backend)



