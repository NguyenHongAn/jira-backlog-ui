import React, { useState } from "react";
import Topbar from "../../components/Topbar/Topbar";
import Column from "../../components/Column/Column";
import {
  BUG_CARD,
  PRIORITY_HIGH,
  PRIORITY_MEDIUM,
  STORY_CARD,
  TASK_CARD
} from "../../constants/board.constants";
import { useCardDragger } from "../../hooks/ui/useCardDragger";
import { useColumnHandler } from "../../hooks/ui/useColumnHandler";
import NewColumnForm from "../../components/NewColumnForm/NewColumnForm";

const DRAFT_COLUMNS = {
  "PROJ-101-0": {
    id: "PROJ-101-0",
    title: "To Do",
    color: "bg-gray-100",
    cards: [
      {
        id: "PROJ-101-0-CARD-0",
        title: "Implement user authentication",
        type: STORY_CARD,
        priority: PRIORITY_HIGH,
        assignee: "John Doe",
        storyPoints: 8,
        labels: ["Backend", "Security"]
      },
      {
        id: "PROJ-101-0-CARD-1",
        title: "Fix login page styling",
        type: BUG_CARD,
        priority: PRIORITY_MEDIUM,
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
        type: TASK_CARD,
        priority: PRIORITY_HIGH,
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
        type: TASK_CARD,
        priority: PRIORITY_MEDIUM,
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
        type: TASK_CARD,
        priority: PRIORITY_HIGH,
        assignee: "Alex Brown",
        storyPoints: 2,
        labels: ["Setup", "Infrastructure"]
      }
    ]
  }
};

const BoardPage = (props) => {
  const [columns, setColumns] = useState(DRAFT_COLUMNS);
  const [showNewColumnForm, setShowNewColumnForm] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  // Hooks
  const { handleDragStart, handleDragOver, handleDrop } = useCardDragger({ setColumns });
  const { addNewColumn, deleteColumn } = useColumnHandler({
    setColumns,
    newColumnTitle,
    columns,
    setNewColumnTitle,
    setShowNewColumnForm
  });
  return (
    <div className="min-h-screen bg-gray-50 ">
      <Topbar setShowNewColumnForm={setShowNewColumnForm} />
      <div className="p-6 ">
        <div className="flex space-x-6 overflow-x-auto pb-6 min-h-screen">
          {Object.values(columns).map((column) => {
            return (
              <Column
                key={column.id}
                columnData={column}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
                deleteColumn={deleteColumn}
              />
            );
          })}
          {showNewColumnForm && (
            <NewColumnForm
              setShowNewColumnForm={setShowNewColumnForm}
              newColumnTitle={newColumnTitle}
              setNewColumnTitle={setNewColumnTitle}
              addNewColumn={addNewColumn}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
