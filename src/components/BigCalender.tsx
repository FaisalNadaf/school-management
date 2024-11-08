/** @format */
"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);
const BigCalender = () => {
	const [view, setview] = useState<View>(Views.WORK_WEEK);

	const handelView = (selectedView: View) => {
		setview(selectedView);
	};
	return (
		<Calendar
			localizer={localizer}
			events={calendarEvents}
			startAccessor="start"
			endAccessor="end"
			view={view}
			views={["work_week", "day"]}
			onView={handelView}
			style={{ height: "100%" }}
			min={new Date(2025, 1, 0, 8, 0, 0)}
			max={new Date(2025, 1, 0, 18, 0, 0)}
		/>
	);
};

export default BigCalender;
