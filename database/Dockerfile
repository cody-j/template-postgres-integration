
FROM postgres:15

ENV POSTGRES_USER=postgres \
    POSTGRES_PASSWORD=postgres \
    POSTGRES_DB=test \
    PGDATA=/var/lib/postgresql/data

RUN groupadd -r pggroup --gid=1000 && \
    useradd -r -g pggroup --uid=1000 pguser && \
    mkdir -p ${PGDATA} && \
    chown -R pguser:pggroup ${PGDATA} && \
    chmod 750 ${PGDATA}

COPY postgresql.conf /etc/postgresql/postgresql.conf

RUN mkdir -p /docker-entrypoint-initdb.d && \
    chown -R pguser:pggroup /docker-entrypoint-initdb.d

COPY ./migrations/* /docker-entrypoint-initdb.d/

RUN chmod -R 750 /docker-entrypoint-initdb.d && \
    chown -R pguser:pggroup /docker-entrypoint-initdb.d

USER pguser

CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]
