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
  { label: "Open Requests", value: "17", note: "Requests still moving through triage, review, or execution." },
  { label: "Over 14 Days", value: "8", note: "Items most likely to need follow-up or escalation." },
  { label: "Waiting On Approval", value: "4", note: "Queue pressure sitting inside review stages." },
  { label: "Closed Recently", value: "4", note: "Requests closed during the current operating window." }
];

const queueRows = [
  ["REQ-617 | Field Coordination", "Critical", "Caleb Dyer", "In Progress", "21 days"],
  ["REQ-626 | Closeout Assistance", "High", "Lena Brooks", "Overdue", "24 days"],
  ["REQ-623 | Document Support", "High", "Lena Brooks", "In Progress", "22 days"],
  ["REQ-620 | Vendor Setup", "High", "Monica Reeves", "Under Review", "18 days"],
  ["REQ-610 | Project Setup Change", "High", "Olivia Chen", "Waiting on Info", "19 days"],
  ["REQ-604 | Reporting Request", "Medium", "Kelsey Morgan", "In Progress", "7 days"]
];

const typeMix = [
  { title: "Field Coordination", meta: "5 active or recent requests" },
  { title: "Document Support", meta: "5 requests with steady PM demand" },
  { title: "Closeout Assistance", meta: "4 requests tied to turnover readiness" },
  { title: "Reporting Request", meta: "4 requests from operations and leadership" }
];

const statusMix = [
  { title: "In Progress", meta: "10 requests currently being worked" },
  { title: "Submitted", meta: "4 requests awaiting triage" },
  { title: "Approved", meta: "4 requests ready to move" },
  { title: "Overdue", meta: "2 requests need immediate attention" }
];

document.getElementById("request-types").innerHTML = requestTypes.map((item) => `<span class="chip">${item}</span>`).join("");

document.getElementById("aging-cards").innerHTML = agingCards.map((item) => `
  <article class="card">
    <div class="card-label">${item.label}</div>
    <div class="card-value">${item.value}</div>
    <div class="card-note">${item.note}</div>
  </article>
`).join("");

document.getElementById("queue-rows").innerHTML = queueRows.map(([request, priority, owner, status, aging]) => `
  <tr>
    <td>${request}</td>
    <td><span class="badge ${priority === "Critical" || priority === "High" ? "high" : priority === "Medium" ? "medium" : "low"}">${priority}</span></td>
    <td>${owner}</td>
    <td>${status}</td>
    <td>${aging}</td>
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
