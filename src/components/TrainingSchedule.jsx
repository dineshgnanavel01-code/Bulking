import { useState } from 'react';
import { weeklySchedule } from "../data/content";

export default function TrainingSchedule() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [activeWorkoutDay, setActiveWorkoutDay] = useState(null);
  const [completedSets, setCompletedSets] = useState({});

  const toggleDay = (day) => {
    setSelectedDay((prev) => (prev === day ? null : day));
  };

  const handleStartWorkout = (e, day) => {
    e.stopPropagation(); // Prevents collapsing accordion on click
    setActiveWorkoutDay(day);
  };

  const handleResetWorkout = (e, day) => {
    e.stopPropagation();
    if (activeWorkoutDay === day) {
      setActiveWorkoutDay(null);
    }
    // Clear completed sets for this day
    setCompletedSets((prev) => {
      const updated = { ...prev };
      delete updated[day];
      return updated;
    });
  };

  const toggleSetComplete = (e, day, exerciseIndex) => {
    e.stopPropagation();
    const key = `${day}-${exerciseIndex}`;
    setCompletedSets((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="schedule" className="py-20 border-t border-white/5 bg-zinc-950">
      <div className="mx-auto max-w-full px-6 lg:px-10">
        
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Weekly Schedule
          </h2>
          <p className="mt-3 text-zinc-400">
            Optimized split for maximum recovery and growth. Click a day to view details.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
          <div className="divide-y divide-white/10">
            {weeklySchedule.map((item) => {
              const isExpanded = selectedDay === item.day;
              const isWorkoutActive = activeWorkoutDay === item.day;

              return (
                <div 
                  key={item.day}
                  onClick={() => toggleDay(item.day)}
                  className={`cursor-pointer transition-colors hover:bg-white/5 ${
                    isExpanded ? "bg-white/5" : ""
                  }`}>
                  <div className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                    <div className="w-32 font-bold text-lime-400">{item.day}</div>
                    <div className="mt-2 text-lg font-bold text-white sm:mt-0">{item.muscle}</div>
                    <div className="mt-2 text-sm text-zinc-400 sm:mt-0">{item.focus}</div>
                    
                    <div className="mt-4 flex items-center justify-between sm:mt-0 sm:justify-end sm:gap-4">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                          item.rest
                            ? "bg-zinc-800 text-zinc-400"
                            : isWorkoutActive
                            ? "bg-lime-400 text-zinc-950"
                            : "bg-lime-400/20 text-lime-400"
                        }`} >
                        {item.rest ? "Rest" : isWorkoutActive ? "In Progress" : "Workout"}
                      </span>

                      <svg
                        className={`h-5 w-5 text-zinc-400 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-lime-400" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="border-t border-white/5 bg-zinc-900/60 p-6 text-sm text-zinc-300">
                      {item.rest ? (
                        <p className="text-zinc-400">
                          Focus on active recovery, adequate sleep, and reaching your daily nutrient targets.
                        </p>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-lime-400">
                              {isWorkoutActive ? "Active Session Tracking:" : "Target Routine & Volume:"}
                            </p>
                            
                            <div className="flex items-center gap-3">
                              {!isWorkoutActive ? (
                                <button
                                  onClick={(e) => handleStartWorkout(e, item.day)}
                                  className="rounded-lg bg-lime-400 px-4 py-1.5 text-xs font-bold text-zinc-950 transition hover:bg-lime-300">
                                  Start Workout
                                </button>
                              ) : (
                                <button
                                  onClick={(e) => handleResetWorkout(e, item.day)}
                                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold text-red-400 transition hover:bg-red-500/20">
                                  Reset Session
                                </button>
                              )}
                            </div>
                          </div>

                          {item.exercises ? (
                            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                              {item.exercises.map((exercise, idx) => {
                                const isDone = completedSets[`${item.day}-${idx}`];
                                return (
                                  <li 
                                    key={idx}
                                    onClick={(e) => isWorkoutActive && toggleSetComplete(e, item.day, idx)}
                                    className={`flex items-center justify-between rounded-lg p-3 border transition-colors ${
                                      isWorkoutActive ? "cursor-pointer" : ""
                                    } ${
                                      isDone 
                                        ? "border-lime-500/40 bg-lime-500/10" 
                                        : "border-white/5 bg-white/5 hover:bg-white/10"
                                    }`}>
                                    <span className={`font-medium ${isDone ? "line-through text-zinc-400" : "text-white"}`}>
                                      {exercise.name}
                                    </span>
                                    <span className={`text-xs ${isDone ? "text-lime-400 font-bold" : "text-zinc-400"}`}>
                                      {isDone ? "✓ Completed" : exercise.sets}
                                    </span>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : (
                            <ul className="list-inside list-disc space-y-1 text-zinc-300">
                              <li>3–4 Working Sets per primary compound lift</li>
                              <li>6–10 Rep Range for progressive overload</li>
                              <li>2–3 Minutes rest between compound sets</li>
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}