import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {
            name: "",
            emailAddress: "",
            phoneNumber: "",
            isEmailValid: false,
            isPhoneValid: false,
            isNextClick: false,
            isPermation: false,
            price: 0,
            total: 0,
            plan: [
                {
                    title: "Arcade",
                    prices: {
                        monthly: {
                            price: 9,
                            promo: false,
                        },
                        yearly: {
                            price: 90,
                            promo: true
                        }
                    },
                    isSelected: false,
                },
                {
                    title: "Advanced",
                    prices: {
                        monthly: {
                            price: 12,
                            promo: false,
                        },
                        yearly: {
                            price: 120,
                            promo: true,
                        }
                    },
                    isSelected: false,
                },
                {
                    title: "Advanced",
                    prices: {
                        monthly: {
                            price: 15,
                            promo: false,
                        },
                        yearly: {
                            price: 150,
                            promo: true,
                        }
                    },
                    isSelected: false,
                },
            ],
            addOns: [
                {
                    title: "Online service",
                    desc: "Access to multiplayer games",
                    price: {
                        monthly: 1,
                        yearly: 10,
                    },
                    isSelected: false,
                },
                {
                    title: "Larger storage",
                    desc: "Extra 1TB of cloud save",
                    price: {
                        monthly: 2,
                        yearly: 20,
                    },
                    isSelected: false,
                },
                {
                    title: "Customizable Profile",
                    desc: "Custom theme on your profile",
                    price: {
                        monthly: 2,
                        yearly: 20,
                    },
                    isSelected: false,
                }
            ]
        },
    },
    reducers: {
        data: ( state, action ) => {
            state.value = action.payload;
        }
    }
});

export const { data } = userSlice.actions;
export default userSlice.reducer;