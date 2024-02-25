import React from 'react';
import { render, screen } from '@testing-library/react';
import FactComponent from "./FactComponent";
import userEvent from "@testing-library/user-event";

describe('FactComponent', () => {
  let onAddToFavouritesHandler: Function;
  let onDeleteHandler: Function;
  const fact = {
    text: "fact text"
  };
  beforeAll(() => {
    onAddToFavouritesHandler = jest.fn();
    onDeleteHandler = jest.fn();
  })
  it('Should render fact without buttons', () => {
    render(<FactComponent fact={fact as any}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Add to favourites")).toBeNull();
    expect(screen.queryByText("Delete")).toBeNull();
  })
  it('Should render fact with "Add to favourites" button', () => {
    render(<FactComponent fact={fact as any} onAddToFavourites={onAddToFavouritesHandler}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Add to favourites")).toBeInTheDocument();
    expect(screen.queryByText("Delete")).toBeNull();
  })
  it('Should render fact with "Delete" button', () => {
    render(<FactComponent fact={fact as any} onDailyDelete={onDeleteHandler}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Add to favourites")).toBeNull();
    expect(screen.queryByText("Delete")).toBeInTheDocument();
  })
  it('Should render fact with "Add to favourites" and "Delete" button', () => {
    render(<FactComponent fact={fact as any} onAddToFavourites={onAddToFavouritesHandler} onDailyDelete={onDeleteHandler}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Add to favourites")).toBeInTheDocument();
    expect(screen.queryByText("Delete")).toBeInTheDocument();
  })
  it('Should call "Add to favourites" action button', async () => {
    render(<FactComponent fact={fact as any} onAddToFavourites={onAddToFavouritesHandler}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Add to favourites")).toBeInTheDocument();
    await userEvent.click(screen.queryByText("Add to favourites") as HTMLElement);
    expect(onAddToFavouritesHandler).toHaveBeenCalledWith(fact);
  })
  it('Should call "Delete" action button', async () => {
    render(<FactComponent fact={fact as any} onDailyDelete={onDeleteHandler}/>);
    expect(screen.getByText(/fact text/i)).toBeInTheDocument();
    expect(screen.queryByText("Delete")).toBeInTheDocument();
    await userEvent.click(screen.queryByText("Delete") as HTMLElement);
    expect(onDeleteHandler).toHaveBeenCalled();
  })
});
