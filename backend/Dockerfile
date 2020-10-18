# pull official base image
FROM python:3.8.3-alpine

# Set working dir
WORKDIR /app/backend

# install psycopg2 dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev
    && apt-get clean

# Install requirements
COPY requirements.txt .
RUN pip3 install --upgrade pip -r requirements.txt

# Copy app files
COPY . .

# Expose port 8000
EXPOSE 8000

# Run entrypoint.sh (make sure postgres loaded)
ENTRYPOINT ["sh","./.entrypoint.sh"]

CMD python3 manage.py runserver 0.0.0.0:8000
