import React, { useContext, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { EventContext } from '../../contexts/event';

export default function Event() {
  const { allEvents } = useContext(EventContext);
  useEffect(() => {
    console.log(allEvents);
  }, [allEvents]);

  return (
    <div>
      {allEvents && allEvents.map((item) => (
        <Link to="/eventpage" className="events">
          <h1>
            {item.titulo}
          </h1>

        </Link>
      ))}
    </div>
  );
}
