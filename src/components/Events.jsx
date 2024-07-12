import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";
import TimelineEvent from "./TimelineEvent";
import EventsNeon from "../assets/events.png";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

const Calendar = () => {
  const events = [
    {
      name: "Commander Night",
      date: "Wed, Jul 10",
      time: "18:00",
      description:
        "Wednesdays @6pm indoors: Commander night ($10 for the whole night + a raffle- we've been raffling packs and secret lair cards!)",
    },
    {
      name: "Modern Tournament",
      date: "Thu, Jul 11",
      time: "19:00",
      description:
        "Modern @7pm\n$15 entry\n2-1: 4 play boosters + promo pack\n2-0-1: 6 play boosters + promo pack\n3-0: 8 play boosters + foil promo pack\nYou can exchange:\n4 play boosters for a free play pass\n6 play boosters for a collector booster pack",
    },
    {
      name: "Flesh and Blood Event",
      date: "Thu, Jul 11",
      time: "19:00",
      description: "Flesh and Blood @7pm",
    },
    {
      name: "Draft",
      date: "Sat, Jul 13",
      time: "10:15",
      description:
        "Draft: Saturdays @10:15am\n$25 Draft pack per match win and even 0-3 gets a draft pack!\n3-0 gets a foil promo pack + MONARCH and 2-1's and over get a reg promo pack",
    },
    {
      name: "Lorcana",
      date: "Sat, Jul 13",
      time: "11:00",
      description: "Saturday Lorcana @11am!",
    },
    {
      name: "Commander Night",
      date: "Wed, Jul 24",
      time: "18:00",
      description:
        "Wednesdays @6pm indoors: Commander night ($10 for the whole night + a raffle- we've been raffling packs and secret lair cards!)",
    },
    {
      name: "Modern Tournament",
      date: "Thu, Jul 25",
      time: "19:00",
      description:
        "Modern @7pm\n$15 entry\n2-1: 4 play boosters + promo pack\n2-0-1: 6 play boosters + promo pack\n3-0: 8 play boosters + foil promo pack\nYou can exchange:\n4 play boosters for a free play pass\n6 play boosters for a collector booster pack",
    },
    {
      name: "Flesh and Blood Event",
      date: "Thu, Jul 25",
      time: "19:00",
      description: "Flesh and Blood @7pm",
    },
    {
      name: "Draft",
      date: "Sat, Jul 27",
      time: "10:15",
      description:
        "Draft: Saturdays @10:15am\n$25 Draft pack per match win and even 0-3 gets a draft pack!\n3-0 gets a foil promo pack + MONARCH and 2-1's and over get a reg promo pack",
    },
    {
      name: "Lorcana",
      date: "Sat, Jul 27",
      time: "11:00",
      description: "Saturday Lorcana @11am!",
    },
    {
      name: "Commander Night",
      date: "Wed, Aug 7",
      time: "18:00",
      description:
        "Wednesdays @6pm indoors: Commander night ($10 for the whole night + a raffle- we've been raffling packs and secret lair cards!)",
    },
    {
      name: "Modern Tournament",
      date: "Thu, Aug 8",
      time: "19:00",
      description:
        "Modern @7pm\n$15 entry\n2-1: 4 play boosters + promo pack\n2-0-1: 6 play boosters + promo pack\n3-0: 8 play boosters + foil promo pack\nYou can exchange:\n4 play boosters for a free play pass\n6 play boosters for a collector booster pack",
    },
    {
      name: "Flesh and Blood Event",
      date: "Thu, Aug 8",
      time: "19:00",
      description: "Flesh and Blood @7pm",
    },
    {
      name: "Draft",
      date: "Sat, Aug 10",
      time: "10:15",
      description:
        "Draft: Saturdays @10:15am\n$25 Draft pack per match win and even 0-3 gets a draft pack!\n3-0 gets a foil promo pack + MONARCH and 2-1's and over get a reg promo pack",
    },
    {
      name: "Lorcana",
      date: "Sat, Aug 10",
      time: "11:00",
      description: "Saturday Lorcana @11am!",
    },
  ];

  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  let selectedDayEvents = events.filter((e) => {
    return e.date === format(selectedDay, "E, MMM d");
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-gray-200">
          <div className="bg-gray-200">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="prev border rounded px-2 py-1"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={nextMonth}
                className="prev border rounded px-2 py-1"
              >
                {">"}
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    "py-1.5"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && "text-white",
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        "text-red-500",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-900",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        "text-gray-400",
                      isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        "bg-gray-900",
                      !isEqual(day, selectedDay) && "hover:bg-gray-200",
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        "font-semibold",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <div className="bg-white border rounded shadow-md p-4 mb-4">
              <div className="text-xl font-semibold">
                <time>{format(selectedDay, "E")}</time>
              </div>
              <div className="text-sm mt-2">
                <time>{format(selectedDay, "MMM dd, yyy")}</time>
              </div>
            </div>
            <div className="bg-white rounded shadow-md mb-4 ">
              {selectedDayEvents.map((event, idx) => (
                <TimelineEvent
                  key={idx}
                  name={event.name}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-4">
        <img src={EventsNeon} className="w-80 h-40" />
      </div>
      <Calendar />
    </div>
  );
};

export default Events;
