import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { WEB_API_URL, WEB_SANCTUM_KEY } from "../../utils";
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
    const [policies, setPolicies] = useState([]);
    const [banners, setBanners] = useState([]);
    const [web_theme, setWebTheme] = useState(1);
    const faqs = useState([]);
    const [seos, setSeos] = useState([]);
    const [testimonial, setTestimonial] = useState([]);
    const gettestimonial = async () => {
        const item = await axios.get(WEB_API_URL + "testimonial", {
            headers: {
                Authorization: WEB_SANCTUM_KEY
            }
        });
        setTestimonial(item.data.data);
        setLoading(false);
    }
    const getseos = async () => {
        setLoading(false);
        const item = await axios.get(WEB_API_URL + "seo", {
            headers: {
                Authorization: WEB_SANCTUM_KEY
            },
            params: {
                per_page: 2000
            }
        });
        setSeos(item.data.data.data);
    }
    // const fetchfaqs = async () => {
    //     try {
    //         const items = await axios.get(WEB_API_URL + "faq");
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
            const resp = await axios.get(WEB_API_URL + "profile", {
                headers: {
                    Authorization: WEB_SANCTUM_KEY
                }
            });
            if (resp.data.success == "1") {
                const data = resp.data.data;
                if (data.theme) {
                    setTheme(JSON.parse(data.theme))
                }
                setWebTheme(resp.data?.data?.web_theme)
                setUser({ admin: resp.data.data, user: resp.data.user });
            }

        } catch (err) {
            // userLogout();
            setError(err.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };
    const fetchBanners = async () => {
        try {
            setLoading(true);
            const response = await axios.get(WEB_API_URL + 'banner?type=home_web', {
                headers: {
                    Authorization: WEB_SANCTUM_KEY
                }
            });
            setBanners(response.data.data);
        } catch (err) {
            console.log(err);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    const fetchpolicies = async () => {
        try {
            setLoading(true);
            const items = await axios.get(WEB_API_URL + "policies");
            setPolicies(items.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    const userLogout = () => {
        localStorage.clear();
        // navigate('/');
    }
    useEffect(() => {
        gettestimonial();
        // fetchfaqs();
        fetchpolicies();
        fetchUser();
        getseos();
        fetchBanners();
    }, []);
    return (
        <UserContext.Provider value={{
            user,
            theme,
            web_theme,
            setTheme,
            testimonial,
            setUser,
            loading,
            error,
            fetchUser,
            userLogout,
            policies,
            banners,
            faqs,
            seos
        }}>
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