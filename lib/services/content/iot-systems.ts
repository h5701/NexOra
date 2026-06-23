import type { ServiceContent } from "../types";
import { bodyImage, cardImage, heroImage } from "./helpers";

export const iotSystems: ServiceContent = {
  slug: "iot-systems",
  category: "cloud-infrastructure",
  tag: "Hardware to cloud",
  title: "IoT Systems",
  tier: "available",
  tierLabel: "Available now",
  seoTitle: "IoT Systems — NexOra Digital Studio",
  seoDescription:
    "Hardware-to-cloud IoT systems — device integration, MQTT telemetry, real-time dashboards, and ingestion pipelines built for intermittent connectivity.",
  hero: {
    outcomeLine:
      "Device integration, telemetry pipelines, and real-time dashboards — from sensor to cloud with reliability under real-world connectivity.",
    image: heroImage(
      "1518770660439-4636190af475",
      "Close-up macro of a circuit board with electronic components",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin",
    ),
  },
  hub: {
    oneLiner:
      "Device integration, telemetry, and real-time dashboards from hardware to cloud.",
    cardImage: cardImage(
      "1518770660439-4636190af475",
      "Macro photograph of a circuit board",
      "Alexandre Debiève",
      "https://unsplash.com/@freezydreamin",
    ),
  },
  whatThisIs: [
    "IoT systems connect physical devices to cloud infrastructure — collecting telemetry, triggering actions, and surfacing real-time data to operators and end users. Our CTO specialises in this stack: MQTT brokers, message queues, time-series storage, and the edge/cloud split that keeps systems responsive when connectivity is unreliable.",
    "We work across the full pipeline: device firmware integration, protocol design, ingestion at scale, custom thing-types and reporting schemas, and the dashboards your team uses to monitor fleet health.",
    "Intermittent connectivity is expected. We design for message buffering, offline sync, and data integrity when devices drop off the network and come back.",
  ],
  deliverables: [
    "Device integration layer with protocol adapters (MQTT, HTTP, CoAP)",
    "Message broker setup with topic design and QoS policies",
    "Telemetry ingestion pipeline with validation and deduplication",
    "Time-series data store configured for your query patterns",
    "Real-time dashboards with live device status and alerting",
    "Custom thing-types, reporting schemas, and fleet management APIs",
  ],
  approach: {
    intro:
      "IoT at scale is a messaging problem first. We design the data flow before picking hardware or cloud services.",
    points: [
      "MQTT topic hierarchy designed for scalability and access control",
      "Message brokering with back-pressure handling and dead-letter routing",
      "Ingestion pipelines that validate, enrich, and route telemetry at scale",
      "Edge/cloud split — process locally what you can, sync what you must",
      "Reliability under intermittent connectivity with store-and-forward buffering",
      "Device provisioning and certificate rotation for production fleets",
    ],
  },
  supportingImage: bodyImage(
    "1581091226825-a6a2a5aee158",
    "Electronics and sensor components on a workbench",
    "ThisisEngineering",
    "https://unsplash.com/@thisisengineering",
  ),
  techTools: [
    "MQTT (Mosquitto / EMQX)",
    "Kafka / RabbitMQ",
    "InfluxDB / TimescaleDB",
    "AWS IoT Core",
    "WebSockets / SSE",
    "Grafana",
    "Docker",
  ],
  cta: {
    label: "Start a project →",
    projectType: "IoT Systems",
  },
};
