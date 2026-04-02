const requestTypes = [
  "Document Support",
  "Project Setup Change",
  "Closeout Assistance",
  "Reporting Request",
  "Field Coordination",
  "Vendor Setup",
  "Operations Support"
];

const agingCards = [
  { label: "Open Requests", value: "17", note: "Requests still moving through routing, approval, or follow-through." },
  { label: "Needs Routing", value: "3", note: "Work is entering faster than owner assignment is settling." },
  { label: "Waiting Approval", value: "4", note: "Queue pressure is collecting inside review stages." },
  { label: "Stalled In Queue", value: "2", note: "Assigned requests are still waiting on a real push." }
];

const queueRows = [
  ["REQ-617", "Field Coordination", "Caleb Dyer", "Needs Routing", "5d"],
  ["REQ-626", "Closeout Assistance", "Lena Brooks", "Waiting Approval", "3d"],
  ["REQ-624", "Field Coordination", "Jordan Hayes", "Assigned but stalled", "2d"],
  ["REQ-623", "Document Support", "Lena Brooks", "In Progress", "4d"],
  ["REQ-620", "Vendor Setup", "Monica Reeves", "Under Review", "6d"],
  ["REQ-609", "Reporting Request", "Kelsey Morgan", "In Progress", "3d"],
  ["REQ-615", "Document Support", "Lena Brooks", "Overdue", "9d"]
];

const typeMix = [
  { title: "Field Coordination", meta: "5 active or recent requests" },
  { title: "Document Support", meta: "5 requests with steady PM demand" },
  { title: "Closeout Assistance", meta: "4 requests tied to turnover readiness" },
  { title: "Reporting Request", meta: "4 requests from operations and leadership" }
];

const statusMix = [
  { title: "In Progress", meta: "6 requests are actively moving" },
  { title: "Needs Routing", meta: "3 requests still lack a settled path" },
  { title: "Waiting Approval", meta: "4 requests are sitting in review" },
  { title: "Overdue", meta: "2 requests now need direct intervention" }
];

document.getElementById("request-types").innerHTML = requestTypes.map((item) => `
  <span class="chip">${item}</span>
`).join("");

document.getElementById("aging-cards").innerHTML = agingCards.map((item) => `
  <article class="aging-card">
    <div class="aging-label">${item.label}</div>
    <div class="aging-value">${item.value}</div>
    <div class="aging-note">${item.note}</div>
  </article>
`).join("");

function getStatusClass(status) {
  if (status === "Overdue" || status === "Needs Routing") {
    return "high";
  }

  if (status === "Waiting Approval" || status === "Assigned but stalled" || status === "Under Review") {
    return "medium";
  }

  return "low";
}

document.getElementById("queue-rows").innerHTML = queueRows.map(([requestId, type, owner, status, aging]) => `
  <tr>
    <td>
      <div class="row-primary">${requestId}</div>
    </td>
    <td>
      <div class="row-secondary">${type}</div>
    </td>
    <td>${owner}</td>
    <td><span class="badge ${getStatusClass(status)}">${status}</span></td>
    <td><span class="aging-pill">${aging}</span></td>
  </tr>
`).join("");

function renderStack(id, rows) {
  document.getElementById(id).innerHTML = rows.map((row) => `
    <div class="stack-item">
      <div class="stack-title">${row.title}</div>
      <div class="stack-meta">${row.meta}</div>
    </div>
  `).join("");
}

renderStack("type-mix", typeMix);
renderStack("status-mix", statusMix);
