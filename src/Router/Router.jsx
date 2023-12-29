import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayOut";
import NotFound from "../Layouts/Pages/NotFound";
import Home from "../Layouts/Pages/Home";
import Register from "../Layouts/Pages/Register";
import Login from "../Layouts/Pages/Login";
import Dashboard from "../Layouts/Pages/Dashboard";
import Contact from "../Layouts/Pages/Contact";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../dashboardRoute.jsx/CreateTask";
import AllTask from "../dashboardRoute.jsx/AllTask";
import Update from "../dashboardRoute.jsx/Update";
import DragNDrop from "../dashboardRoute.jsx/DragNDrop";



const TASKS = [
    {
      id: 1,
      status: "New Order",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "8 hrs",
      days: "5 days left"
    },
    {
      id: 2,
      status: "In Progress",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "6 hrs",
      days: "6 days left",
      done: false
    },
    {
      id: 3,
      status: "Completed",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "13 hrs",
      days: "4 days left"
    },
    {
      id: 4,
      status: "New Order",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "22 hrs",
      days: "2 days left",
      done: true
    },
    {
      id: 5,
      status: "In Progress",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "2 hrs",
      days: "1 day left",
      newOrder: true,
      done: false
    },
    {
      id: 6,
      status: "Completed",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "20 hrs",
      days: "11 days left",
      done: true
    },
    {
      id: 5,
      status: "Delivered",
      image: 'https://i.ibb.co/vHzSF0j/409760059-4352806438276961-7488879961269370577-n.png',
      time: "2 hrs",
      days: "1 day left",
      done: false
    }
  ];


const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut></MainLayOut>,
    errorElement: <NotFound></NotFound>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
    ]

  },
  {
    path: '/dashboard',
    element: (<PrivateRoute><Dashboard></Dashboard></PrivateRoute>),
    children: [
        {
            path: 'createtask',
            element: <CreateTask></CreateTask>
        },
        {
            path: 'alltask',
            element: <AllTask></AllTask>,
            
        },
        {
                path: 'dragdrop',
                element: <DragNDrop tasks={TASKS}></DragNDrop>
            },
        {
            path: 'alltask/update/:id',
            element: <Update></Update>,
            loader: ({ params }) => fetch(`https://task-server-red.vercel.app/usertasks/${params.id}`),
        },

    ]

  }
    
]);

export default myRouter;
