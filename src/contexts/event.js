import React, { createContext, useState } from 'react';
import * as EventService from '../services/event';

export const EventContext = createContext({});

// eslint-disable-next-line react/prop-types
export default function EventProvider({ children }) {
  const [allEvents, setAllEvents] = useState('');
  const [events] = useState('');
  const Host = 'http://localhost:3333';

  async function createEvent(event) {
    console.log('ola', event);
    const response = await EventService.createEvent(Host, event);
    return response;
  }
  async function updateEvent(event) {
    console.log('ola', event);
    const response = await EventService.updateEvent(Host, event);
    return response;
  }

  async function deleteEvent(event) {
    console.log('ola', event);
    const response = await EventService.deleteEvent(Host, event);
    return response;
  }

  async function readEvent(event) {
    console.log('ola', event);
    const response = await EventService.readEvent(Host, event);
    return response;
  }

  async function readAllEvents() {
    const response = await EventService.readAllEvents(Host);
    setAllEvents(response.data);
    console.log(response.data);
    console.log('estou aqui');
    return response;
  }

  return (
    <EventContext.Provider
      value={{
        events,
        allEvents,
        createEvent,
        updateEvent,
        deleteEvent,
        readAllEvents,
        readEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
