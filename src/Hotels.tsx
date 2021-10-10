import { Grid, makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./AppState";
import ErrorMessage from "./ErrorMessage";
import Hotel from "./Hotel";
import { IFileHotel, IHotel, IStatusizedHotel } from "./HotelReducer";
import LoadingSpinner from "./LoadingSpinner";


/*
actionObject => contains 2 main attributes = > IHotelAction
  1 action name
  2 payload 
*/


const useStyles = makeStyles({
    container: {
        padding: "20px"
    },
});

export default function Hotels() {
    const dispatch = useDispatch();
    const styles = useStyles();
    const statusizedHotel: IStatusizedHotel = useSelector(
        (state: AppState) => state?.hotelReducer
    )
    useEffect(() => {
        async function api() {
            const response = await fetch("hotel.json");
            if (response.ok) {
                const json = await response.json();
                const hotels: IHotel[] = json.map((x: IFileHotel) => x.restaurant);
                dispatch({ type: "completedHotel", payload: hotels });
            }
            else {
                dispatch({ type: "failedHotel", payload: [] });
            }
        }
        dispatch({ type: "loadingHotel", payload: [] });
        api();
    }, []);

    switch (statusizedHotel.loading) {
        case "completed":
            return renderGrid(statusizedHotel.hotels, styles.container);
        case "failed":
            return <ErrorMessage message="failed to load the hotel data"></ErrorMessage>
        default:
            return <LoadingSpinner />
    }
}

function renderGrid(hotels: IHotel[], className: string) {
    return (
        <Grid container spacing={6} justifyContent="center" alignItems="stretch" className={className}>
            {hotels.map(renderHotel)}
        </Grid>
    )
}

function renderHotel(hotel: IHotel, index: number) {
    return (
        <Grid item key={index} xs={3}>
            <Hotel {...hotel} />
        </Grid>
    )
}