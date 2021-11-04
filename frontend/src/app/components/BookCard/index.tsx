import React, { useState } from "react";

// Components
import { Marginer } from "../Marginer";
import Button from "../Button";
import Calendar from "react-calendar";

// TWIN in STYLED
import styled from "styled-components";
import tw from "twin.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "react-calendar/dist/Calendar.css";

const CardContainer = styled.div`
  min-height: 4.3rem;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);

  ${tw`
    relative
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pr-6
    md:pl-6
  `}
`;

const ItemContainer = styled.div`
  ${tw`
    flex
  `}
`;

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `}
`;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `}
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;

  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `}
`;

const CalendarInput = styled(Calendar)`
  width: 100%;
  position: absolute;
  max-width: none;
  top: 5rem;
  left: 0;
  user-select: none;
`;

const BookCard = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [isStartCalendarOpen, setIsStartCalendarOpen] = useState(false);
  const [returnDate, setReturnDate] = useState<Date>(new Date(startDate));
  const [isReturnCalendarOpen, setIsReturnCalendarOpen] = useState(false);

  const toggleStartDateCalendar = () => {
    setIsStartCalendarOpen((prevStartDateOpen) => !prevStartDateOpen);
    if (isReturnCalendarOpen) setIsReturnCalendarOpen(false);
  };
  const toggleReturnDateCalendar = () => {
    setIsReturnCalendarOpen((prevReturnDateOpen) => !prevReturnDateOpen);
    if (isStartCalendarOpen) setIsStartCalendarOpen(false);
  };

  console.log(`Start: ${startDate}`);
  console.log(`Return: ${returnDate}`);

  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleStartDateCalendar}>
          Pick Up Date{" "}
          <SmallIcon>
            <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
          </SmallIcon>
        </Name>

        {isStartCalendarOpen && <CalendarInput value={startDate} onChange={setStartDate} />}
      </ItemContainer>

      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={toggleReturnDateCalendar}>
          Return Date{" "}
          <SmallIcon>
            <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown} />
          </SmallIcon>
        </Name>

        {isReturnCalendarOpen && <CalendarInput value={returnDate} onChange={setReturnDate} />}
      </ItemContainer>
      <Marginer direction="horizontal" margin="2rem" />
      <Button text="Book Your Ride" />
    </CardContainer>
  );
};

export default BookCard;
