export const WEB_BASE_URL = "https://b2b.aahiltours.com/v2/";
export const WEB_API_URL = "https://b2b.aahiltours.com/v2/api/";
export const WEB_Image_URL = "https://b2b.aahiltours.com/v2/public/";
export const WEB_SANCTUM_KEY = "697|zftl8C7PKb1RZ9QOzhKC8iCYbEyQur2tj3cJxdUY524c35ad";

export const trips = [
  { id: 1, trip: "One Way" },
  { id: 2, trip: "Round Trip" },
  { id: 3, trip: "Mulicity" }
];
export const pfts = [
  { title: "Student", 'key': "STUDENT" },
  { title: "Senior Citizen", 'key': "SENIOR_CITIZEN" }
];
export const travellerarr = [
  { title: 'Adult', para: '12+ years', key: 'ADULT' },
  { title: 'Children', para: '2-12 years', key: 'CHILD' },
  { title: 'Infant', para: '0-2 years', key: 'INFANT' },
];

export const cabinclasses = [
  { title: 'Economy', key: 'ECONOMY' },
  { title: 'Premium Economy', key: 'PREMIUM_ECONOMY' },
  { title: 'Business Class', key: 'BUSINESS' },
  { title: 'First Class', key: 'FIRST' },
];
export const flighttypes = [
  { title: "is Direct Flight", key: "isDirectFlight" },
  { title: "is Connecting Flight", key: "isConnectingFlight" },
];
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // This will give us YYYY-MM-DD
};
// export const token = "7121046d868390-4355-4319-bfe2-710739a8df9d";
// export const token = "61032947730e85de-b941-4ad5-96fb-b95a9a249343";
export const JS_BASE_URL = "https://www.aahiltours.com:8771/";
export const JS_API_URL = "https://www.aahiltours.com:8771/api/v1/";
// export const JS_BASE_URL = "https://localhost:8771/";
// export const JS_API_URL = "https://localhost:8771/api/v1/";
export const AIRIQ = "https://omairiq.azurewebsites.net/";
export const AIRIQKEY = "NTMzNDUwMDpBSVJJUSBURVNUIEFQSToxODkxOTMwMDM1OTk2OlFRYjhLVjNFMW9UV05RY1NWL0Vtcm9UYXFKTSs5dkZvaHo0RzM4WWhwTDhsamNqR3pPN1dJSHhVQ2pCSzNRcW0="
export const getData = async (endpoint) => {
  try {
    const response = await fetch(JS_BASE_URL + 'api/v1/' + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export const postData = async (endPoint, data) => {
  try {
    const response = await fetch(JS_BASE_URL + 'api/v1/' + endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // Include the request body
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.error('Error:', err.message);
  }
};

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
export const SEARCH = "search-query";
export const FAIR_RULE = "fair-rule";
export const REVIEW = "review";
export const BOOK = "book";
export const CONFIRM_BOOK = "https://tripjack.com/oms/v1/air/confirm-book";
export const PRICE_VALIDATE = "https://tripjack.com/oms/v1/air/fare-validate";
export const BOOK_DETAILS = "https://tripjack.com/oms/v1/booking-details";
export const SEAT = "seat";
export const USER_DETAILS = "https://tripjack.com/ums/v1/user-detail";
export const classes = "w-full border-b border-blue-gray-400 outline-none text-sm p-2 text-gray-600";
export const tis = ['Mr', 'Master', 'Ms'];
export const formcontrol = "rounded w-full text-blue-gray-900 outline-none border border-blue-gray-200 text-sm p-2";
export const btn = "bg-primary text-xs uppercase  font-y tracking-wider shadow-sm shadow-secondary text-white px-5 rounded py-3";
