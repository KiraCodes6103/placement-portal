import Home from "./components/Home";
import JobDetails from "./components/Job-Details/JobDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddJob from "./components/AddJob";
import SignIn from "./components/SignIn";
import SignUp from "./components/signup";
import Hero from "./components/FrontPage/Hero";
import CompanyDash from "./components/CompanyDash/CompanyDash";
import StudentEditProfile from "./components/StudentEditProfile";
import Notification from "./components/notification/Notification";
import StudentNotification from "./components/notification/StudentNotification";
import Test from "./components/Test";
import Table from "./components/Table/Table";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6a0dad", // Purple
    },
    secondary: {
      main: "#ffffff", // White
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/student",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/company/newjob",
    element: <AddJob />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/company",
    element: <CompanyDash />,
  },
  {
    path: "/student/profile",
    element: <StudentEditProfile />,
  },

  {
    path: "/company/notification",
    element: <Notification />,
  },
  {
    path: "/student/notification",
    element: <StudentNotification />,
  },
  {
    path: "/company/table",
    element: <Table />,
  },

  {
    path: "/organization/:id",
    element: <JobDetails />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
