

import logo from '../../Asset/CarouselImage/logo.png'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';

//ROUTE
import AdminDashboard from './AdminDashboard';
import CreateProductForm from './CreateProductForm';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';
import CustomersTable from './CustomersTable';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { green } from '@mui/material/colors'

// ICON
import OutputRoundedIcon from '@mui/icons-material/OutputRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';


import { Route, Routes, useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from '../../State/Auth/Action'
import BlogTable from './BlogTable';
const drawerWidth = 240;

function Admin(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const navigate = useNavigate()
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store)
    const dispatch = useDispatch();



    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt))
        }
    }, [jwt, auth.jwt])

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const menu = [
        { name: "Bảng điều khiển", path: "/admin", icon: <DashboardRoundedIcon /> },
        { name: "Sản phẩm", path: "/admin/products", icon: <Inventory2RoundedIcon /> },
        { name: "Người dùng", path: "/admin/customers", icon: <PeopleOutlineRoundedIcon /> },
        { name: "Đơn hàng", path: "/admin/orders", icon: <ArticleRoundedIcon /> },
        { name: "Bài viết", path: "/admin/blogs", icon: <NewspaperRoundedIcon /> },
        { name: "Thêm sản phẩm", path: "/admin/create_product", icon: <PlaylistAddRoundedIcon /> },
        { name: "", path: "" },
    ]


    const drawer = (
        <div  >
            {auth.user?.firstName ? (
                <div className="ml-2 my-3 space-x-1 flex items-center  ">
                    <Avatar
                        className='text-white mr-1'
                        sx={{
                            bgcolor: green[500],
                            cursor: 'pointer',
                            color: 'white'
                        }}
                    >

                        {auth.user?.firstName[0].toUpperCase()}
                    </Avatar>
                    <div>
                        {auth.user?.firstName}
                    </div>
                    <div>
                        {auth.user?.lastName}
                    </div>
                    

                </div>
            ) : (
                <Button>
                  oh noooooooooooo
                </Button>
            )}
           

            <Divider />
            <Box sx={{
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
            }}>
                <>
                    {/* {isLargeScreen && <Toolbar></Toolbar>} */}
                    <List>
                        {menu.map((item, index) =>
                            <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>{item.name}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText>Tài khoản</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding onClick={() => navigate("/")}>
                        <ListItemButton>
                            <ListItemIcon>
                                <OutputRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Quay lại</ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>

        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: '#16a34a'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className=' my-3 mr-2'>
                        <img
                            className="h-10 w-12 lg:w-auto md:w-auto rounded-full"
                            src={logo}
                            alt=''
                        />
                    </div>
                    <Search >
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            sx={{ width: 200 }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, height: '100%' }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        height: '100%'
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        height: '100%'
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Routes>
                    <Route path='/' element={<AdminDashboard />} ></Route>
                    <Route path='/create-product' element={<CreateProductForm />} ></Route>
                    <Route path='/products' element={<ProductsTable />} ></Route>
                    <Route path='/orders' element={<OrdersTable />} ></Route>
                    <Route path='/blogs' element={<BlogTable />} ></Route>
                    <Route path='/customers' element={<CustomersTable />} ></Route>
                </Routes>
            </Box>
        </Box>
    );
}

Admin.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default Admin;

