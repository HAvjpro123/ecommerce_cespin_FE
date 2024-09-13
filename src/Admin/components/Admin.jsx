import logo from '../../Asset/CarouselImage/logo.png'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AdminDashboard from './AdminDashboard';
import CreateProductForm from './CreateProductForm';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';
import CustomersTable from './CustomersTable';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import OutputRoundedIcon from '@mui/icons-material/OutputRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
const drawerWidth = 240;

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

const menu = [
    { name: "Bảng điều khiển", path: "/admin", icon: <DashboardRoundedIcon /> },
    { name: "Sản phẩm", path: "/admin/products", icon: <Inventory2RoundedIcon /> },
    { name: "Người dùng", path: "/admin/customers", icon: <PeopleOutlineRoundedIcon /> },
    { name: "Đơn hàng", path: "/admin/orders", icon: <ArticleRoundedIcon /> },
    { name: "Bài viết", path: "/admin/blogs", icon: <NewspaperRoundedIcon /> },
    { name: "Thêm sản phẩm", path: "/admin/create-product", icon: <PlaylistAddRoundedIcon /> },
    { name: "", path: "" },
]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.easeOut,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                },
            },
        ],
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: `${drawerWidth}px`,
                transition: theme.transitions.create(['margin', 'width'], {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ backgroundColor: '#16a34a' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            {
                                mr: 2,
                            },
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    
                </Toolbar>
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    {/* Logo */}
                    <div className='m-auto'>
                        <div className=" flex " >
                            <img
                                className="h-10 w-auto "
                                src={logo}
                                alt=''
                            />
                            <span className="my-auto pt-1 font-semibold text-green-700 text-2xl">CESPIN</span>
                        </div>
                    </div>

                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>

                <Divider />

                <Box sx={{
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
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

            </Drawer>

            <Main open={open}>
                <DrawerHeader />

                <Routes>
                    <Route path='/' element={<AdminDashboard />} ></Route>
                    <Route path='/create-product' element={<CreateProductForm />} ></Route>
                    <Route path='/products' element={<ProductsTable />} ></Route>
                    <Route path='/orders' element={<OrdersTable />} ></Route>
                    <Route path='/customers' element={<CustomersTable />} ></Route>
                </Routes>
            </Main>
            <DrawerHeader />

        </Box>
    );
}
