# InfoDev

An interactive platform tailored for developers, showcasing tech news and fostering engaging discussions, complete with user authentication and efficient article management
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Git installed on your machine.
- MySQL 

## Getting Started

To get a local copy up and running, follow these simple steps.

1. Clone the repository:
    ```terminal
    git clone https://github.com/HamzaHarrass/Blog_InfoDev-.git
    ```
2. Navigate to the project directory:
   ```terminal
   cd Blog_InfoDev-
   ```
3. Install dependencies using npm:
    ```terminal
    npm i or yarn add
    ```

## Configuration

You may need to configure some environment variables.

1. Extract the `.env` file :
   
2. Update on the environment variables.
   
## Database Setup

> Make sure you have created and set up your database configuration in the `.env` file before proceeding with these steps.

1. Run database migrations:

    ```terminal
    npm run db:migrate
    ```
2. Generate the Prisma Client code:
   ```terminal
    npm run prisma:generate
    ```
3. Seed the database with initial data (optional):
    ```terminal
    npm run db:seed
    ```

## Running the Application

To run the application locally, you can use the following command:

```terminal
npm run dev
```