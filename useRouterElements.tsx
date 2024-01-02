import React, { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './src/layouts/MainLayout'
import VeNoiDia from 'src/components/VeNoiDia'
import TinTuc from 'src/components/TinTuc'
import ThongTinHang from 'src/components/ThongTinHang'
import Home from 'src/components/Home'
import Admin from 'src/admin/Admin'
import AddTicket from 'src/admin/Ticket/AddTicket'
import Ticket from 'src/admin/Ticket'
import User from 'src/admin/User/User'
import AddUser from 'src/admin/User/AddUser'
import Booking from 'src/components/Booking'
import Invoice from 'src/admin/Invoice/Invoice'
import Pay from 'src/components/Pay'
import Info from 'src/components/Info'
const useRouterElements = () => {
  const elements = useRoutes([
    {
      path: '',
      index: true,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: 've-noi-dia',
      element: (
        <MainLayout>
          <VeNoiDia />
        </MainLayout>
      )
    },
    {
      path: 've-quoc-te',
      element: (
        <MainLayout>
          <TinTuc />
        </MainLayout>
      )
    },
    {
      path: 'thong-tin-hang',
      element: (
        <MainLayout>
          <ThongTinHang />
        </MainLayout>
      )
    },
    {
      path: 'tin-tuc',
      element: (
        <MainLayout>
          <TinTuc />
        </MainLayout>
      )
    },
    {
      path: 'admin',
      children: [
        {
          path: 'ticket',
          children: [
            {
              path: '',
              element: (
                <Admin>
                  <Ticket />
                </Admin>
              )
            },
            {
              path: 'add',
              element: (
                <Admin>
                  <AddTicket />
                </Admin>
              )
            },
            {
              path: 'update/:id',
              element: (
                <Admin>
                  <AddTicket />
                </Admin>
              )
            }
          ]
        },
        {
          path: 'user',
          children: [
            {
              path: '',
              element: (
                <Admin>
                  <User />
                </Admin>
              )
            },
            {
              path: 'add',
              element: (
                <Admin>
                  <AddUser />
                </Admin>
              )
            },
            {
              path: 'update/:id',
              element: (
                <Admin>
                  <AddUser />
                </Admin>
              )
            }
          ]
        },
        {
          path: 'invoice',
          element: (
            <Admin>
              <Invoice />
            </Admin>
          )
        }
      ]
    },
    {
      path: 'booking',
      element: (
        <MainLayout>
          <Booking />
        </MainLayout>
      )
    },
    {
      path: 'info',
      element: (
        <MainLayout>
          <Info />
        </MainLayout>
      )
    },
    {
      path: 'pay',
      element: (
        <MainLayout>
          <Pay />
        </MainLayout>
      )
    }
  ])
  return elements
}

export default useRouterElements
