# Lost-and-Found API Backend

This is the backend repository for the Lost-and-Found project. It's a Node.js application that connects to a PostgreSQL database to manage the backend services for our platform.

## Getting Started

These instructions will help you to get a copy of the backend service up and running on your local machine.

### Prerequisites

- Git
- Node.js and npm
- PostgreSQL

### Cloning the Repository

To clone the backend repository:

```bash
git clone https://github.com/hen1227/lost-and-found-api.git
cd lost-and-found-api
```

### Installing Dependencies

Install the project dependencies:

```bash
npm install
```

### Environment Setup

Set up your environment variables in a `.env` file at the root of the project:

```dotenv
POSTGRES_DATABASE=your_database_name
POSTGRES_USERNAME=your_username
POSTGRES_PASSWORD=your_password
```

### Setting Up PostgreSQL Database

#### For Mac:
You can install PostgreSQL using Homebrew:

```
brew install postgresql
```

To start the PostgreSQL service:

```
brew services start postgresql
```
#### For Windows:

Download the PostgreSQL installer from the official site and follow the installation wizard:
[PostgreSQL Windows Installers](https://www.postgresql.org/download/windows/)

##### Creating the Database
Once PostgreSQL is installed, you can create a new database using the psql command-line tool:

```
psql -U your_username -c "CREATE DATABASE your_database_name;"
```
### Running the Application

With the database configured, start the server:

```bash
npm start
```

The API should now be running on `http://localhost:4004` by default.

### Pushing Changes

Follow the standard git procedure to commit and push your changes:

```bash
git pull origin main  # Always pull before making changes
git add .
git commit -m "Your detailed commit message"
git push origin main
```

## License

Licensed under the MIT License - see [LICENSE.md](LICENSE.md) for more details.

## Acknowledgments

* All SPS Computer Science Club members
