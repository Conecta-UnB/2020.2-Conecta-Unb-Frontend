export async function createEvent(Host, event) {
  try {
    const response = await fetch(`${Host}/api/event/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: event.titulo,
        descricao: event.descricao,
        organizador: event.organizador,
        data: event.data,
      }),
    });
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}

export async function updateEvent(Host, event) {
  try {
    const response = await fetch(`${Host}/api/event/update/:${event.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: event.titulo,
        descricao: event.descricao,
        organizador: event.organizador,
        data: event.data,
      }),
    });
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}

export async function deleteEvent(Host, event) {
  try {
    const response = await fetch(`${Host}/api/event/delete/:${event.id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: event.titulo,
        descricao: event.descricao,
        organizador: event.organizador,
        data: event.data,
      }),
    });
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}

export async function readEvent(Host, event) {
  try {
    const response = await fetch(`${Host}/api/event/read/:${event.id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        titulo: event.titulo,
        descricao: event.descricao,
        organizador: event.organizador,
        data: event.data,
      }),
    });
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}

export async function readAllEvents(Host) {
  try {
    const response = await fetch(`${Host}/api/event/read_all`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Success: ', data);
    return data;
  } catch (error) {
    console.log('error ', error);
    return error;
  }
}
