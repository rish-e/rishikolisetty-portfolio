"use client";

import { useReducer, useCallback } from "react";

export type WindowState = {
  id: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  minimized: boolean;
  maximized: boolean;
};

type State = {
  windows: WindowState[];
  nextZ: number;
  focusedId: string | null;
};

type Action =
  | { type: "OPEN"; id: string; title: string; size: { width: number; height: number }; position?: { x: number; y: number } }
  | { type: "CLOSE"; id: string }
  | { type: "MINIMIZE"; id: string }
  | { type: "MAXIMIZE"; id: string }
  | { type: "FOCUS"; id: string }
  | { type: "MOVE"; id: string; position: { x: number; y: number } }
  | { type: "RESIZE"; id: string; size: { width: number; height: number } };

function getDefaultPosition(index: number): { x: number; y: number } {
  // Cascade windows
  const base = { x: 80, y: 60 };
  return { x: base.x + index * 30, y: base.y + index * 30 };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN": {
      // If already open, just focus it
      const existing = state.windows.find((w) => w.id === action.id);
      if (existing) {
        return reducer(
          { ...state, windows: state.windows.map((w) => w.id === action.id ? { ...w, minimized: false } : w) },
          { type: "FOCUS", id: action.id }
        );
      }
      const position = action.position ?? getDefaultPosition(state.windows.length);
      const newWindow: WindowState = {
        id: action.id,
        title: action.title,
        position,
        size: action.size,
        zIndex: state.nextZ,
        minimized: false,
        maximized: false,
      };
      return {
        windows: [...state.windows, newWindow],
        nextZ: state.nextZ + 1,
        focusedId: action.id,
      };
    }
    case "CLOSE":
      return {
        ...state,
        windows: state.windows.filter((w) => w.id !== action.id),
        focusedId: state.focusedId === action.id ? null : state.focusedId,
      };
    case "MINIMIZE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, minimized: true } : w
        ),
        focusedId: state.focusedId === action.id ? null : state.focusedId,
      };
    case "MAXIMIZE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, maximized: !w.maximized } : w
        ),
      };
    case "FOCUS":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, zIndex: state.nextZ } : w
        ),
        nextZ: state.nextZ + 1,
        focusedId: action.id,
      };
    case "MOVE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, position: action.position } : w
        ),
      };
    case "RESIZE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, size: action.size } : w
        ),
      };
    default:
      return state;
  }
}

const initialState: State = {
  windows: [],
  nextZ: 10,
  focusedId: null,
};

export function useWindowManager() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openWindow = useCallback(
    (id: string, title: string, size: { width: number; height: number }, position?: { x: number; y: number }) =>
      dispatch({ type: "OPEN", id, title, size, position }),
    []
  );
  const closeWindow = useCallback((id: string) => dispatch({ type: "CLOSE", id }), []);
  const minimizeWindow = useCallback((id: string) => dispatch({ type: "MINIMIZE", id }), []);
  const maximizeWindow = useCallback((id: string) => dispatch({ type: "MAXIMIZE", id }), []);
  const focusWindow = useCallback((id: string) => dispatch({ type: "FOCUS", id }), []);
  const moveWindow = useCallback(
    (id: string, position: { x: number; y: number }) =>
      dispatch({ type: "MOVE", id, position }),
    []
  );

  const resizeWindow = useCallback(
    (id: string, size: { width: number; height: number }) =>
      dispatch({ type: "RESIZE", id, size }),
    []
  );

  const isOpen = useCallback((id: string) => state.windows.some((w) => w.id === id && !w.minimized), [state.windows]);

  return {
    windows: state.windows,
    focusedId: state.focusedId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    moveWindow,
    resizeWindow,
    isOpen,
  };
}
