import * as PATH from "../paths/paths";

import Homepage from "../pages/Homepage";
import CreatePage from "../pages/CreatePage";
import EventPage from "../pages/EventPage";

const routes = () => {
  return [
    { path: PATH.HOME, element: <Homepage title="Homepage | Envited" /> },
    {
      path: PATH.CREATE,
      element: <CreatePage title="Create Event | Envited" />,
    },
    { path: PATH.EVENT, element: <EventPage title="Event | Envited" /> },
  ];
};

export default routes;
