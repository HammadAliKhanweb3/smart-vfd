# Smart-VFD: Intelligent Variable Frequency Drive Monitoring System

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-21+-green?logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![NestJS](https://img.shields.io/badge/NestJS-11-red?logo=nestjs)](https://nestjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red)](#)

**A production-grade microservices platform for real-time monitoring, data aggregation, and analysis of Variable Frequency Drive (VFD) systems**

[Overview](#overview) • [Architecture](#architecture) • [Getting Started](#getting-started) • [Services](#services) • [Development](#development) • [Deployment](#deployment)

</div>

---

## Overview

Smart-VFD is a comprehensive IoT monitoring solution Integrated with AI designed for industrial automation environments. It provides real-time sensor data collection from VFD equipment, processes this data through distributed microservices, and delivers insights through a modern, responsive web interface and provides predictive maintenance for Hardware using Machine Learing.

### Key Features

- **Real-Time Data Collection**: MQTT-based sensor data ingestion with Kafka streaming
- **Distributed Architecture**: Loosely coupled microservices for scalability and resilience
- **Time-Series Storage**: InfluxDB integration for efficient sensor data persistence
- **GraphQL API**: Modern, type-safe API with real-time subscriptions
- **Responsive Dashboard**: React-based frontend with TanStack Start ecosystem
- **Container-Ready**: Full Docker Compose setup for development and production
- **Industrial Metrics**: Comprehensive VFD sensor monitoring including voltage, current, temperature, and vibration

---

## Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        IoT Devices/Sensors                      │
│                    (VFD Equipment & Sensors)                    │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ MQTT Protocol
                         ▼
        ┌────────────────────────────────┐
        │   Mosquitto MQTT Broker        │
        │        (Port: 1883)            │
        └────────────┬───────────────────┘
                     │
        ┌────────────▼────────────────────┐
        │       MQTT Service              │
        │  (Kafka Message Producer)       │
        └────────────┬───────────────────┘
                     │
        ┌────────────▼────────────────────────────────────┐
        │      Apache Kafka Cluster                      │
        │   (Event Streaming & Message Bus)              │
        └────────────┬─────────────────────┬─────────────┘
                     │                     │
        ┌────────────▼──────────┐  ┌──────▼──────────────┐
        │    DB Service         │  │   AI Service        │
        │ (Data Persistence)    │  │ (Analytics/ML)      │
        └────────────┬──────────┘  └──────┬──────────────┘
                     │                    │
        ┌────────────▼────────────────────▼──────┐
        │        InfluxDB                        │
        │  (Time-Series Data Storage)            │
        │       (Port: 8086)                     │
        └─────────────────────────────────────────┘
                     │
        ┌────────────▼──────────────────┐
        │    API Gateway                │
        │   (GraphQL & REST API)        │
        │      (Port: 3000)             │
        └────────────┬──────────────────┘
                     │
        ┌────────────▼──────────────────┐
        │   Frontend Application        │
        │   (React/Vite Dashboard)      │
        │      (Port: 3000)             │
        └───────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 19, Vite, TanStack Router, Apollo Client | Web UI & data visualization |
| **API Gateway** | NestJS 11, GraphQL, Apollo Server | API routing & real-time subscriptions |
| **Services** | NestJS Microservices | MQTT ingestion, data persistence, analytics |
| **Message Queue** | Apache Kafka 7.5 | Event streaming & inter-service communication |
| **Data Storage** | InfluxDB 2.7 | Time-series database for sensor metrics |
| **Message Broker** | Mosquitto MQTT 2.0 | IoT device communication protocol |
| **Infrastructure** | Docker, Docker Compose | Containerization & orchestration |
| **Language** | TypeScript | Type-safe development across stack |

---

## Getting Started

### Prerequisites

- **Docker & Docker Compose** (v2.0+)
- **Node.js** 21+ with pnpm package manager
- **Git** for version control
- **4GB RAM minimum** (8GB recommended for development)

### Quick Start

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd smart-vfd
```

#### 2. Start Services with Docker Compose

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

#### 3. Verify Services

```bash
# API Gateway
curl http://localhost:3000/graphql

# InfluxDB
curl http://localhost:8086/health

# Kafka
docker-compose exec kafka kafka-topics --bootstrap-server localhost:9092 --list

# MQTT
docker-compose exec mosquitto mosquitto_sub -h localhost -t '#' -v
```

### Development Setup

#### Frontend Development

```bash
cd frontend

# Install dependencies
pnpm install

# Start development server (Port: 3000)
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint and format
pnpm lint
pnpm format
```

#### Backend Service Development

```bash
cd backend/<service-name>  # e.g., backend/api-gateway

# Install dependencies
pnpm install

# Development mode with watch
pnpm start:dev

# Production build
pnpm build
pnpm start:prod

# Run tests
pnpm test
pnpm test:e2e
pnpm test:cov
```

---

## Services

### API Gateway
**Path**: [backend/api-gateway](backend/api-gateway/)

Central GraphQL API endpoint for all client requests with real-time subscription support.

**Responsibilities**:
- GraphQL schema definition and Apollo Server configuration
- Client request routing and validation
- Real-time WebSocket subscriptions for sensor data
- Integration with downstream services

**Key Configuration**:
- **Port**: 3000
- **GraphQL Endpoint**: `/graphql`
- **Environment Variables**:
  - `KAFKA_BROKER`: Kafka broker address (default: kafka:9092)

**Exposed Types**:
```graphql
type Query {
  hello: String!
}

type SensorData {
  currentP1: Float
  currentP2: Float
  currentP3: Float
  motorCurrent: Float
  motorSpeed: Float
  motorVibration: Float
  tempMotor: Float
  tempVfd: Float
  voltageInput: Float
  voltageP1: Float
  voltageP2: Float
  voltageP3: Float
}

type Subscription {
  inputVoltage: SensorData!
}
```

### MQTT Service
**Path**: [backend/mqtt-service](backend/mqtt-service/)

Ingests device telemetry from MQTT broker and streams events to Kafka.

**Responsibilities**:
- Connect to Mosquitto MQTT broker
- Subscribe to device topic hierarchies
- Parse and validate incoming sensor data
- Publish events to Kafka topics for downstream consumption
- Handle disconnection and reconnection logic

**Key Configuration**:
- **MQTT URL**: `mqtt://mosquitto:1883`
- **Kafka Broker**: `kafka:9092`
- **Health Check**: Available on service startup

**Data Flow**:
```
IoT Devices → MQTT Broker → MQTT Service → Kafka Topic
```

### DB Service
**Path**: [backend/db-service](backend/db-service/)

Persists sensor telemetry to InfluxDB with real-time data aggregation.

**Responsibilities**:
- Consume sensor events from Kafka
- Transform and validate incoming data
- Write time-series metrics to InfluxDB
- Provide data query interface for API Gateway
- Implement data retention policies

**Key Configuration**:
- **InfluxDB URL**: `http://influxdb:8086`
- **InfluxDB Organization**: `smart-grid`
- **InfluxDB Bucket**: `sensors_bucket`
- **Kafka Broker**: `kafka:9092`

**Environment Variables**:
```env
INFLUX_URL=http://influxdb:8086
INFLUX_TOKEN=my-super-secret-token
INFLUX_ORG=smart-grid
INFLUX_BUCKET=sensors_bucket
KAFKA_BROKER=kafka:9092
```

### AI Service
**Path**: [backend/ai-service](backend/ai-service/)

Advanced analytics and machine learning service for predictive insights.

**Responsibilities**:
- Process historical sensor data for pattern recognition
- Generate predictive maintenance alerts
- Compute anomaly detection models
- Provide analytical endpoints via REST API

**Key Configuration**:
- Will be integrated with main API Gateway
- Consumes enriched sensor data from Kafka

---

## Infrastructure

### Message Queue: Apache Kafka

Kafka serves as the central event bus for asynchronous communication between services.

**Configuration**:
```yaml
Broker ID: 1
Advertised Listeners:
  - PLAINTEXT://kafka:9092 (internal)
  - PLAINTEXT_HOST://localhost:29092 (external)
Auto Topic Creation: Enabled
Replication Factor: 1
```

**Topics**:
- `sensor-data`: Raw sensor metrics from MQTT service
- `processed-metrics`: Transformed data for persistence
- `alerts`: System alerts and anomalies

### Time-Series Database: InfluxDB

InfluxDB 2.7 stores and queries high-volume sensor metrics efficiently.

**Configuration**:
```yaml
Organization: smart-grid
Bucket: sensors_bucket
Username: sensor_user
Password: sensor_pass123
Admin Token: my-super-secret-token
Port: 8086
```

**Default Retention**: Configurable per bucket

### Message Broker: Mosquitto MQTT

Mosquitto 2.0 handles IoT device connections using the MQTT protocol.

**Configuration**:
- **Port**: 1883
- **Config File**: [mosquitto.conf](mosquitto.conf)
- **Topic Structure**: Recommended hierarchy
  ```
  devices/vfd/{deviceId}/sensors/{sensorType}
  devices/vfd/{deviceId}/commands/
  ```

### Zookeeper

Zookeeper coordinates the Kafka cluster.

**Configuration**:
- **Container**: confluentinc/cp-zookeeper:7.5.0
- **Client Port**: 2181

---

## Development

### Project Structure

```
smart-vfd/
├── backend/
│   ├── api-gateway/          # GraphQL API server
│   │   ├── src/
│   │   │   ├── app.module.ts
│   │   │   ├── app.resolver.ts
│   │   │   ├── app.service.ts
│   │   │   ├── schema.gql
│   │   │   └── main.ts
│   │   ├── test/
│   │   ├── package.json
│   │   └── Dockerfile
│   ├── db-service/           # InfluxDB persistence
│   │   ├── src/
│   │   ├── test/
│   │   ├── package.json
│   │   └── Dockerfile
│   ├── mqtt-service/         # MQTT to Kafka bridge
│   │   ├── src/
│   │   ├── test/
│   │   ├── package.json
│   │   └── Dockerfile
│   └── ai-service/           # ML & analytics
│       ├── src/
│       ├── test/
│       └── package.json
├── frontend/                 # React dashboard
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── routes/
│   │   ├── graphql/
│   │   ├── lib/
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── docker-compose.yaml       # Orchestration
├── mosquitto.conf            # MQTT broker config
└── README.md
```

### Code Style & Standards

**TypeScript**: Strict mode enabled for type safety

**Formatting**:
```bash
# Run Prettier across all services
pnpm format

# Run ESLint with automatic fixes
pnpm lint
```

**Testing**:
```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Coverage report
pnpm test:cov
```

### Database Schemas

#### InfluxDB Measurement: `vfd_sensors`

| Field | Type | Unit | Description |
|-------|------|------|-------------|
| `voltageInput` | Float | V | Input phase voltage |
| `voltageP1` | Float | V | Phase 1 output voltage |
| `voltageP2` | Float | V | Phase 2 output voltage |
| `voltageP3` | Float | V | Phase 3 output voltage |
| `currentP1` | Float | A | Phase 1 current |
| `currentP2` | Float | A | Phase 2 current |
| `currentP3` | Float | A | Phase 3 current |
| `motorCurrent` | Float | A | Motor current draw |
| `motorSpeed` | Float | RPM | Motor speed |
| `motorVibration` | Float | mm/s | Vibration level |
| `tempMotor` | Float | °C | Motor temperature |
| `tempVfd` | Float | °C | VFD controller temperature |

**Tags** (for filtering):
- `device_id`: Unique device identifier
- `location`: Physical location of VFD
- `device_type`: VFD model/series

---

## Deployment

### Docker Compose Deployment

The `docker-compose.yaml` file defines the complete production environment.

**Services Deployed**:
1. Zookeeper - Kafka coordination
2. Kafka - Event streaming platform
3. InfluxDB - Time-series database
4. Mosquitto - MQTT broker
5. MQTT Service - IoT data bridge
6. DB Service - Data persistence layer
7. API Gateway - GraphQL API server

**Start Production Stack**:
```bash
# Build images
docker-compose build

# Start services with persistent volumes
docker-compose up -d

# View status
docker-compose ps

# Monitor logs
docker-compose logs -f [service-name]

# Stop and clean up
docker-compose down -v
```

### Environment Configuration

Create a `.env` file in the project root for environment-specific settings:

```env
# Database
INFLUX_URL=http://influxdb:8086
INFLUX_TOKEN=your-secure-token
INFLUX_ORG=smart-grid
INFLUX_BUCKET=sensors_bucket

# Message Queue
KAFKA_BROKER=kafka:9092

# MQTT
MQTT_URL=mqtt://mosquitto:1883

# API Server
API_PORT=3000
NODE_ENV=production
```

### Health Checks

All services include health check endpoints for monitoring:

```bash
# API Gateway
curl -s http://localhost:3000/health || echo "Unhealthy"

# InfluxDB
curl -s http://localhost:8086/health || echo "Unhealthy"

# Kafka (via healthcheck command)
docker-compose exec kafka kafka-topics --bootstrap-server localhost:9092 --list
```

### Scaling Considerations

**For Production**:
- Use Kubernetes instead of Docker Compose for orchestration
- Configure Kafka replication factor > 1 for fault tolerance
- Enable InfluxDB clustering for high availability
- Implement external monitoring (Prometheus/Grafana)
- Configure persistent volume drivers for data durability
- Set up automated backups for InfluxDB

---

## Common Tasks

### View Service Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f api-gateway

# Follow last 100 lines
docker-compose logs -f --tail=100 mqtt-service
```

### Restart a Service

```bash
docker-compose restart api-gateway
```

### Execute Commands in Container

```bash
# Access Kafka
docker-compose exec kafka bash

# Query InfluxDB CLI
docker-compose exec influxdb influx
```

### Clean Up

```bash
# Stop services
docker-compose stop

# Remove containers
docker-compose rm

# Remove volumes (data)
docker-compose down -v
```

### Test MQTT Connection

```bash
# Publish test message
docker-compose exec mosquitto mosquitto_pub -h localhost -t "test/topic" -m "Hello"

# Subscribe to topic
docker-compose exec mosquitto mosquitto_sub -h localhost -t "test/topic"
```

---

## API Reference

### GraphQL Queries

#### Query Hello

```graphql
query {
  hello
}
```

**Response**:
```json
{
  "data": {
    "hello": "Hello World!"
  }
}
```

### GraphQL Subscriptions

#### Subscribe to Input Voltage

```graphql
subscription {
  inputVoltage {
    voltageInput
    voltageP1
    voltageP2
    voltageP3
    currentP1
    currentP2
    currentP3
    motorCurrent
    motorSpeed
    motorVibration
    tempMotor
    tempVfd
  }
}
```

**Real-time updates** from connected IoT devices via WebSocket connection.

---

## Troubleshooting

### Services Won't Start

```bash
# Check Docker daemon
docker ps

# View compose errors
docker-compose up --no-detach

# Check resource availability
docker system df
```

### Kafka Connection Issues

```bash
# Verify Kafka is running
docker-compose ps kafka

# Check topic creation
docker-compose exec kafka kafka-topics --bootstrap-server kafka:9092 --list

# Test broker connectivity
docker-compose exec kafka kafka-broker-api-versions --bootstrap-server kafka:9092
```

### InfluxDB Connection Errors

```bash
# Verify InfluxDB is running
docker-compose ps influxdb

# Check InfluxDB logs
docker-compose logs influxdb

# Test token/auth
curl -H "Authorization: Token my-super-secret-token" http://localhost:8086/api/v2/orgs
```

### MQTT Not Receiving Data

```bash
# Check Mosquitto logs
docker-compose logs mosquitto

# Test MQTT connectivity
docker-compose exec mosquitto mosquitto_sub -h localhost -t '$SYS/#'

# Verify publish is working
docker-compose exec mosquitto mosquitto_pub -h localhost -t "test" -m "test"
```

---

## Performance Tuning

### Kafka Optimization

```yaml
# docker-compose.yaml
environment:
  KAFKA_NUM_NETWORK_THREADS: 8
  KAFKA_NUM_IO_THREADS: 8
  KAFKA_SOCKET_SEND_BUFFER_BYTES: 102400
  KAFKA_SOCKET_RECEIVE_BUFFER_BYTES: 102400
```

### InfluxDB Optimization

- Adjust cache size: `INFLUXDB_CACHE_MAX_MEMORY_BYTES`
- Configure shard groups for retention
- Use proper retention policies for old data

### Database Indexing

InfluxDB automatically indexes tags for faster queries. Ensure `device_id` and `location` are used as tags, not fields.

---

## Contributing

### Branch Naming Convention

- `feature/description` - New features
- `bugfix/issue-name` - Bug fixes
- `refactor/component` - Refactoring
- `docs/topic` - Documentation updates

### Commit Standards

```bash
git commit -m "feat: add real-time alerts to dashboard"
git commit -m "fix: correct voltage conversion formula"
git commit -m "docs: update deployment guide"
```

### Pull Request Process

1. Create feature branch from `main`
2. Ensure all tests pass: `pnpm test`
3. Update documentation if needed
4. Request review from team members
5. Merge after approval

---

## License

UNLICENSED - All rights reserved

---

## Support & Contact

For questions, issues, or contributions:

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check the [docs/](docs/) directory
- **Email**: [Contact information]

---

## Changelog

### Version 1.0.0 (Current)

- ✅ Complete microservices architecture
- ✅ Real-time sensor data streaming
- ✅ GraphQL API with subscriptions
- ✅ React dashboard with data visualization
- ✅ Docker Compose orchestration
- ✅ Time-series data storage with InfluxDB
- ✅ MQTT device integration

### Planned Features

- 🔄 Kubernetes deployment templates
- 🔄 Advanced ML anomaly detection
- 🔄 Mobile app for remote monitoring
- 🔄 Email/SMS alert notifications
- 🔄 Historical data export (CSV/JSON)
- 🔄 Custom metric dashboard builder

---

<div align="center">

**Made with ❤️ for industrial IoT monitoring**

[⬆ Back to Top](#smart-vfd-intelligent-variable-frequency-drive-monitoring-system)

</div>
