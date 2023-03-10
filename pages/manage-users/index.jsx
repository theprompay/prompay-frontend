import React, { useState, useEffect } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import DataTableBase from '../../components/DataTableBase';
import { FiSearch } from 'react-icons/fi';
import { userColumns } from '../../components/TableData';
import { getUsers } from '../../services/userService';
import { setAdminViewUserProfile } from '../../store/slice/userSlice';
import withAdminAuth from '../../auth/WithAdminAuth';

const SearchComponent = ({ onFilter, filterText }) => (
  <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white flex w-4/5 md:w-[325px] h-[42px] py-[12-x] px-[16px] items-center border border-[#D1D5DB] bg-[#F9FAFB] rounded-lg mb-[16px]'>
    <FiSearch />
    <input
      type='text'
      className='p-2 bg-transparent outline-none w-[90%]'
      placeholder='Search'
      onChange={onFilter}
      name={filterText}
      value={filterText}
    />
  </div>
);

const ManageUsers = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);

  const [filterText, setFilterText] = React.useState('');
  const filteredItems = users.filter((item) => {
    return (
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.phone &&
        item.phone
          .toString()
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (item.createdAt &&
        item.createdAt.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.updatedAt &&
        item.updatedAt.toLowerCase().includes(filterText.toLowerCase()))
    );
  });

  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const [pending, setPending] = React.useState(true);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [data, setData] = React.useState(filteredItems);

  React.useEffect(() => {
    const getAllUsers = async () => {
      try {
        const { data } = await getUsers(token);
        setUsers(data);
        setPending(false);
      } catch (error) {
        setPending(true);
      }
    };

    getAllUsers();
  }, []);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <SearchComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  const viewUser = (selectedUser) => {
    dispatch(setAdminViewUserProfile(selectedUser));
    router.push(`/manage-users/profile`);
  };

  return (
    <>
      <DashboardLayout>
        <div className='dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white  '>
          <div className='pt-[110px] md:pt-[46px] mx-[15px] md:mx-[50px]'>
            <div className='flex justify-between mb-[20px] md:mb-[49px]'>
              <h2 className='font-[500] text-[24px] leading-7'>
                Prompay Users
              </h2>
            </div>
            <div
              className='mt-[10px] w-full bg-white min-h-[200px] rounded-lg px-[15px] py-[15px] md:px-[50px] md:py-[20px] mb-[70px] dark:text-gray-200 dark:bg-main-dark-bg dark:hover:text-white'
              style={{
                boxShadow:
                  '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)',
              }}
            >
              {subHeaderComponentMemo}{' '}
              <DataTableBase
                columns={userColumns}
                data={filteredItems}
                progressPending={pending}
                clearSelectedRows={toggleCleared}
                onRowClicked={(row, event) => viewUser(row)}
              />
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default withAdminAuth(ManageUsers);
