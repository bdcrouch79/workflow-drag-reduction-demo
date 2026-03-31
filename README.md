# IronRidge Project Support Request Workflow

## Overview

IronRidge Project Support Request Workflow shows how IronRidge Contractors could replace scattered email-and-spreadsheet support requests with a cleaner operating queue for intake, routing, approvals, assignment, and aging visibility.

## Business Problem

Project managers and support teams submit operational requests through inboxes, meeting notes, hallway conversations, and personal trackers. Requests get delayed when ownership is unclear, approvals stall, or aging is not visible across departments.

## Solution Concept

This repo models a practical internal request workflow using lightweight seed data, concise documentation, and a static mock queue. The emphasis is on believable operating rules, clean request lifecycle visibility, and a business-facing presentation that feels useful rather than theoretical.

## Ecosystem Context

This repo represents the intake and routing layer within the broader IronRidge demo ecosystem. The requests shown here can generate execution commitments tracked in `execution-infrastructure-demo`, may draw on field conditions visible in `contractor-ops-system-demo`, and can ultimately feed reporting demand or volume signals that appear in `ops-visibility-demo`.

## Repository Structure

- `docs/` overview, business context, workflow rules, architecture, diagrams, and ecosystem framing
- `data/raw/` employees, projects, request records, and approval records
- `data/curated/` aging, volume, and status summaries
- `data/sample_exports/` dashboard-ready queue export
- `src/workflow-mock/` static request queue mock for screenshots and walkthroughs
- `assets/` shared visual assets including the IronRidge wordmark
- `notes/` roadmap and screenshot planning

## Data And Sample Assets

The raw layer focuses on request type, ownership, approval stage, current status, and aging. The sample records stay grounded in common contractor support work such as document control, setup changes, reporting requests, field coordination, and closeout help.

## Mock Experience / Screenshots

The mock queue is intentionally practical: intake context, aging cards, a visible queue, and simple breakdowns by request type and status. It is designed to read like a useful internal operations screen rather than a product landing page.

## Future Enhancements

- add simple SLA expectations by request type and priority
- expand approval rules for cost, staffing, or client-impacting changes
- add workload and queue views by owner or department
- surface cycle time and approval wait-time reporting

## Fictional Demo Notice

This repository is part of a fictional demonstration environment built around IronRidge Contractors, a sample contractor-focused operating company created to showcase reporting, workflow, execution, and operations system design. Names, data, and scenarios are illustrative, but the business patterns reflect real-world operational needs.