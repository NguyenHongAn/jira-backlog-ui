import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";

const DRAFT_COLUMNS = {
  "PROJ-101-0": {
    id: "PROJ-101-0",
    title: "To Do",
    color: "bg-gray-100",
    cards: [
      {
        id: "PROJ-101-0-CARD-0",
        title: "Implement user authentication",
        type: "Story",
        priority: "High",
        assignee: "John Doe",
        storyPoints: 8,
        labels: ["Backend", "Security"]
      },
      {
        id: "PROJ-101-0-CARD-1",
        title: "Fix login page styling",
        type: "Bug",
        priority: "Medium",
        assignee: "Jane Smith",
        storyPoints: 3,
        labels: ["Frontend", "UI"]
      }
    ]
  },
  "PROJ-101-1": {
    id: "PROJ-101-1",
    title: "In Progress",
    color: "bg-blue-100",
    cards: [
      {
        id: "PROJ-101-1-CARD-0",
        title: "Create dashboard layout",
        type: "Task",
        priority: "High",
        assignee: "Mike Johnson",
        storyPoints: 5,
        labels: ["Frontend", "Design"]
      }
    ]
  },
  "PROJ-101-2": {
    id: "PROJ-101-2",
    title: "Testing",
    color: "bg-yellow-100",
    cards: [
      {
        id: "PROJ-101-2-CARD-0",
        title: "Test API endpoints",
        type: "Task",
        priority: "Medium",
        assignee: "Sarah Wilson",
        storyPoints: 3,
        labels: ["Testing", "API"]
      }
    ]
  },
  "PROJ-101-3": {
    id: "PROJ-101-3",
    title: "Done",
    color: "bg-green-100",
    cards: [
      {
        id: "PROJ-101-3-CARD-0",
        title: "Setup project structure",
        type: "Task",
        priority: "High",
        assignee: "Alex Brown",
        storyPoints: 2,
        labels: ["Setup", "Infrastructure"]
      }
    ]
  }
};

const BoardPage = (props) => {
  const [columns, setColumns] = useState(DRAFT_COLUMNS);

  return (
    <div className="min-h-screen bg-gray-50 min-w-screen">
      <Topbar />
      <div className="p-6">
        <div className="flex space-x-6 overflow-x-auto pb-6">
          {Object.values(columns).map((column) => {})}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
