--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE "hwr-pwa";




--
-- Drop roles
--

DROP ROLE postgres;


--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:GpoujTOa2rk9AJbHpf3l3g==$PwKUmJZc0z21qLZAN1YuyoWmLn5oiR7VdcNox7DJMGg=:EPU1cf/KjwfycQMzyDZRVrlTvAW0Gw/3YyJuvyvb2CU=';

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.7 (Debian 15.7-1.pgdg120+1)
-- Dumped by pg_dump version 15.7 (Debian 15.7-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO postgres;

\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: postgres
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: postgres
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "hwr-pwa" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.7 (Debian 15.7-1.pgdg120+1)
-- Dumped by pg_dump version 15.7 (Debian 15.7-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: hwr-pwa; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "hwr-pwa" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE "hwr-pwa" OWNER TO postgres;

\connect -reuse-previous=on "dbname='hwr-pwa'"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: bus_model_line_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.bus_model_line_enum AS ENUM (
    'seongnam',
    'bundang'
);


ALTER TYPE public.bus_model_line_enum OWNER TO postgres;

--
-- Name: stops_model_direction_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.stops_model_direction_enum AS ENUM (
    'go',
    'back'
);


ALTER TYPE public.stops_model_direction_enum OWNER TO postgres;

--
-- Name: stops_model_line_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.stops_model_line_enum AS ENUM (
    'seongnam',
    'bundang'
);


ALTER TYPE public.stops_model_line_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bus_model; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bus_model (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    line public.bus_model_line_enum DEFAULT 'seongnam'::public.bus_model_line_enum NOT NULL,
    lat numeric(10,8) NOT NULL,
    lng numeric(11,8) NOT NULL,
    "isRunning" character varying
);


ALTER TABLE public.bus_model OWNER TO postgres;

--
-- Name: stops_model; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stops_model (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    name character varying(50) NOT NULL,
    alias character varying(50) NOT NULL,
    lat numeric(10,8) NOT NULL,
    lng numeric(11,8) NOT NULL,
    "arrivalTime" time without time zone NOT NULL,
    direction public.stops_model_direction_enum,
    line public.stops_model_line_enum DEFAULT 'seongnam'::public.stops_model_line_enum NOT NULL,
    "order" smallint NOT NULL,
    "prevArrivalTime" character varying
);


ALTER TABLE public.stops_model OWNER TO postgres;

--
-- Name: stops_model_users_users_model; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.stops_model_users_users_model (
    "stopsModelId" uuid NOT NULL,
    "usersModelId" uuid NOT NULL
);


ALTER TABLE public.stops_model_users_users_model OWNER TO postgres;

--
-- Name: users_model; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users_model (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp without time zone DEFAULT now() NOT NULL,
    token character varying NOT NULL
);


ALTER TABLE public.users_model OWNER TO postgres;

--
-- Data for Name: bus_model; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bus_model (id, "createdAt", "updatedAt", line, lat, lng, "isRunning") FROM stdin;
\.


--
-- Data for Name: stops_model; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stops_model (id, "createdAt", "updatedAt", name, alias, lat, lng, "arrivalTime", direction, line, "order", "prevArrivalTime") FROM stdin;
4dda47e1-fc1b-46df-9176-5def2907f3a6	2024-08-21 14:45:30.061544	2024-08-21 14:45:30.061544	한우리 장애인 주간보호센터		37.44344260	127.17997570	09:00:00	go	seongnam	0	\N
33671565-6ef2-4201-a865-df1ac0b5594f	2024-08-21 15:20:59.679764	2024-08-21 15:20:59.679764	학년쇼핑	기범약국	37.44016470	127.16259400	09:05:00	go	seongnam	1	\N
48a1ebbc-f22c-4dfb-9020-4eaf0e492cb4	2024-08-22 00:09:02.237175	2024-08-22 00:09:02.237175	상대원시장	국민은행	37.43721350	127.15905200	09:08:00	go	seongnam	2	\N
50fc6115-d91c-4b71-8ca5-c6c7723c5e54	2024-08-22 00:16:30.497102	2024-08-22 00:16:30.497102	파리바게트	은행동	37.45429710	127.16148800	09:13:00	go	seongnam	3	\N
870ccfdd-8ee8-4d49-91a5-8fecf4164dce	2024-08-22 00:33:42.04601	2024-08-22 00:33:42.04601	새마을금고	은행시장	37.45705150	127.16381560	09:14:00	go	seongnam	4	\N
8903365b-e428-4881-a6cf-6074862baad6	2024-08-22 00:38:45.161686	2024-08-22 00:38:45.161686	남한산성입구	영원무역	37.46016230	127.16653750	09:16:00	go	seongnam	5	\N
965ca282-cdc9-48f6-8998-18b0e7af156d	2024-08-22 01:00:43.443531	2024-08-22 01:00:43.443531	신사골감자탕	\b투섬플레이스	37.45874700	127.16429820	09:21:00	go	seongnam	6	\N
41e249d2-d658-4e6f-937b-92d981e13423	2024-08-22 01:27:13.302875	2024-08-22 01:27:13.302875	금광시장 정류장	단대푸르지오 앞	37.44981200	127.15873000	09:23:00	go	seongnam	7	\N
c214eca2-6502-4c9a-bad9-9230d7748a8b	2024-08-22 01:32:44.621278	2024-08-22 01:32:44.621278	미도아파트 앞	성남세무서	37.44665300	127.15535300	09:25:00	go	seongnam	8	\N
4dd78b9e-863b-4d0f-9768-c4421636c809	2024-08-22 01:40:34.153673	2024-08-22 01:40:34.153673	진주사우나		37.45031760	127.15239350	09:30:00	go	seongnam	9	\N
e6673043-bf34-4676-ae22-6bc454430c2f	2024-08-22 02:26:31.081439	2024-08-22 02:26:31.081439	종합시장 정류장		37.44085560	127.14599100	09:59:00	go	seongnam	17	\N
298368b3-19cc-4d29-84a3-f74966c37b44	2024-08-22 02:29:31.624846	2024-08-22 02:29:31.624846	SK 주유소	세이브존	37.44325300	127.15409500	10:03:00	go	seongnam	18	\N
d9ed1280-7374-49e3-be20-7988da105c32	2024-08-22 02:35:32.414734	2024-08-22 02:35:32.414734	선경아파트		37.44169300	127.17011100	10:15:00	go	seongnam	19	\N
e562f1d0-128f-467c-acba-9874fd69751f	2024-08-22 02:02:25.665735	2024-08-22 02:02:25.665735	성남초등학교		37.44499140	127.14382990	09:35:00	go	seongnam	10	\N
a675e092-92a0-43b3-afa1-214098b32916	2024-08-22 02:07:45.335084	2024-08-22 02:07:45.335084	구시청 삼거리		37.44329000	127.13948800	09:37:00	go	seongnam	11	\N
629bed32-a225-4802-a025-fdba45a60f32	2024-08-22 02:10:45.210464	2024-08-22 02:10:45.210464	태평오거리	퀸마트	37.44556370	127.13475930	09:40:00	go	seongnam	12	\N
c29bb058-8b76-4a90-ac3f-245fc25267c2	2024-08-22 02:13:00.82123	2024-08-22 02:13:00.82123	하모니마트	태평3동주민센터	37.44579070	127.13277560	09:42:00	go	seongnam	13	\N
928ade1b-8d05-4535-873c-62e01b28d85f	2024-08-22 02:16:36.669182	2024-08-22 02:16:36.669182	신태양탕	한국전력	37.44443540	127.12994670	09:45:00	go	seongnam	14	\N
fc356b72-1170-41ba-9f4e-43d4308adbf3	2024-08-22 02:21:07.323443	2024-08-22 02:21:07.323443	곽생로		37.44085560	127.13093740	09:48:00	go	seongnam	15	\N
092f77bb-0a9e-4464-b55d-9979b9bad358	2024-08-22 02:24:45.578192	2024-08-22 02:24:45.578192	수진역 정류장		37.43802100	127.14196100	09:56:00	go	seongnam	16	\N
4e893e8c-29d9-4d2a-84b3-b536830939f5	2024-08-22 02:50:30.827334	2024-08-22 02:50:30.827334	한우리 장애인 주간보호센터		37.44344260	127.17997570	10:20:00	go	seongnam	20	\N
\.


--
-- Data for Name: stops_model_users_users_model; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.stops_model_users_users_model ("stopsModelId", "usersModelId") FROM stdin;
\.


--
-- Data for Name: users_model; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_model (id, "createdAt", "updatedAt", token) FROM stdin;
\.


--
-- Name: bus_model PK_1187f7585c750c673f4f65f2862; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bus_model
    ADD CONSTRAINT "PK_1187f7585c750c673f4f65f2862" PRIMARY KEY (id);


--
-- Name: users_model PK_1355f66d5ebddb2449c566571c8; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_model
    ADD CONSTRAINT "PK_1355f66d5ebddb2449c566571c8" PRIMARY KEY (id);


--
-- Name: stops_model_users_users_model PK_b0ee550b47ae375e03a348b501d; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops_model_users_users_model
    ADD CONSTRAINT "PK_b0ee550b47ae375e03a348b501d" PRIMARY KEY ("stopsModelId", "usersModelId");


--
-- Name: stops_model PK_c7fdd2ad87c009f7e3685940f7c; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops_model
    ADD CONSTRAINT "PK_c7fdd2ad87c009f7e3685940f7c" PRIMARY KEY (id);


--
-- Name: users_model UQ_37ca12552eb96b709e6c34486bd; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users_model
    ADD CONSTRAINT "UQ_37ca12552eb96b709e6c34486bd" UNIQUE (token);


--
-- Name: IDX_0d7a6526ff101313b9778eb640; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_0d7a6526ff101313b9778eb640" ON public.stops_model_users_users_model USING btree ("stopsModelId");


--
-- Name: IDX_d05874a83fae9e60451f22380b; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX "IDX_d05874a83fae9e60451f22380b" ON public.stops_model_users_users_model USING btree ("usersModelId");


--
-- Name: stops_model_users_users_model FK_0d7a6526ff101313b9778eb640f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops_model_users_users_model
    ADD CONSTRAINT "FK_0d7a6526ff101313b9778eb640f" FOREIGN KEY ("stopsModelId") REFERENCES public.stops_model(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: stops_model_users_users_model FK_d05874a83fae9e60451f22380b4; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.stops_model_users_users_model
    ADD CONSTRAINT "FK_d05874a83fae9e60451f22380b4" FOREIGN KEY ("usersModelId") REFERENCES public.users_model(id);


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.7 (Debian 15.7-1.pgdg120+1)
-- Dumped by pg_dump version 15.7 (Debian 15.7-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

