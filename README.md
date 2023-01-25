# brickmania
Playing with historical data and states


### Backend:

- `docker-compose up -d --build`
- `docker-compose exec web python manage.py migrate` to apply missing migrations
- `docker-compose exec web python manage.py createsuperuser` to create an admin user

You can visit it under http://0.0.0.0:8000/

### Frontend

- `cd client && npm install`
- run the frontend with `npm run dev`

Visit it under http://localhost:3000/ 


### Data

This wont come with data out of the box, so please create a superuser with above command, and head to http://0.0.0.0:8000/bricks/, tap login on the top right and login. afterwards, you can create some bricks via the UI