# React JS CRUD Operations

This project demonstrates a simple CRUD (Create, Read, Update, Delete) application using React JS. It features a list of employees and allows you to create, edit, view details, and delete employee records.

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (v14.x.x or higher) and npm (v6.x.x or higher) installed on your machine. You can check your Node and npm versions by running `node -v` and `npm -v` in your terminal.

### Installing

1. Clone the repository:

git clone https://github.com/your_username/react-js-crud-operations.git

###  Create new app
           npx create-react-app employee
###   Create routing
           npm install react-router-dom
###   Install bootstrap
          npm install bootstrap
###   Install Json-Server
           npm install -g json-server
	   json-server --watch db.json --port ++++++

2. Change to the project directory:

cd react-js-crud-operations


3. Install the dependencies:

npm install

### Running the Application

1. Start the development server:

npm start


2. Open your browser and navigate to `http://localhost:3000`.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [React Router](https://reactrouter.com/) - A collection of navigational components for React applications.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- [React documentation](https://reactjs.org/docs/getting-started.html) - For guiding through the fundamentals of React.
- [React Router documentation](https://reactrouter.com/web/guides/quick-start) - For providing useful guides on using React Router.

## Project Structure

Below is an overview of the project structure:


### Components

- `EmpCreate.js`: The component responsible for creating a new employee record.
- `EmpDetail.js`: The component responsible for displaying the details of an employee record.
- `EmpEdit.js`: The component responsible for editing an existing employee record.
- `EmpListing.js`: The component responsible for displaying the list of employees and providing options to create, edit, view details, and delete employee records.

### Styles

- `App.css`: Contains global styles for the application.
- `index.css`: Contains styles for the body and code elements.

### Main Entry

- `App.js`: Contains the main application component and sets up routing for the different components.
- `index.js`: The entry point for the application. Renders the main `App` component.

### Other Files

- `.gitignore`: Specifies files and directories to ignore when committing to the Git repository.
- `package.json`: Contains project metadata, dependencies, and scripts.
- `README.md`: The project documentation file, which you are currently reading.
