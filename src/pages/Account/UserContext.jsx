import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { API_URL, usertoken } from "../../utils";
import PropTypes from 'prop-types';
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    // const navigate = useNavigate();
    const [theme, setTheme] = useState({
        primary: "#00897b",
        secondary: "#9333ea",
    });
    const [user, setUser] = useState(false);
   
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const policies = useState([]);
    const [banners, setBanners] = useState([]);
    const faqs = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    const gettestimonial = async () => {
        const item = await axios.get(API_URL + "testimonial", {
            headers: {
                Authorization: usertoken
            }
        });
        setTestimonial(item.data.data);
    }
    // const fetchfaqs = async () => {
    //     try {
    //         const items = await axios.get(API_URL + "faq");
    //         setFaqs(items.data.data);
    //     } catch (err) {
    //         console.log(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    const fetchUser = async () => {
        try {
            setLoading(true);
            const resp = await axios.get(API_URL + "profile", {
                headers: {
                    Authorization: usertoken
                }
            })
            const data = resp.data.data;
            if(data.theme){
                setTheme(JSON.parse(data.theme))
            }
           
            setUser(resp.data.data);
        } catch (err) {
            userLogout();
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    const fetchBanners = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API_URL + 'banner?type=home_web', {
                headers: {
                    Authorization: usertoken
                }
            });
            setBanners(response.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    // const fetchpolicies = async () => {
    //     try {
    //         setLoading(true);
    //         const items = await axios.get(API_URL + "policy");
    //         setPolicies(items.data.data);
    //     } catch (err) {
    //         console.log(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // }
    const userLogout = () => {
        localStorage.clear();
        // navigate('/');
    }
    useEffect(() => {
        gettestimonial();
        // fetchfaqs();
        // fetchpolicies();
        fetchUser();

        fetchBanners();
    }, []);
    return (
        <UserContext.Provider value={{ user, theme, setTheme, testimonial, setUser, loading, error, fetchUser, userLogout, policies, banners, faqs }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => {
    return useContext(UserContext);
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired
};