import { createCRUD } from '@devfamily/admiral'
import React from 'react'

export const CRUDOffers = createCRUD({
    path: '/offers',
    resource: 'offers',
    index: {
        title: 'Offers',
        newButtonText: 'Add',
        tableColumns: [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Brand',
                dataIndex: 'brand',
                key: 'brand',
            },
            {
                title: 'Offer External Id',
                dataIndex: 'offerExternalId',
                key: 'offerExternalId',
                render: (value) => {
                    return <span>{value}</span>
                },
            },
            {
                title: 'Image',
                dataIndex: 'image',
                key: 'image',
                render: (value) => {
                    return <a href={value}>{value}</a>
                },
            },
            {
                title: 'Square Image',
                dataIndex: 'squareImage',
                key: 'squareImage',
            },
            {
                title: 'Description',
                dataIndex: 'description',
                key: 'description',
            },
            {
                title: 'Url',
                dataIndex: 'url',
                key: 'url',
            },
            {
                title: 'Call To Action',
                dataIndex: 'callToAction',
                key: 'callToAction',
            },
            {
                title: 'Type',
                dataIndex: 'type',
                key: 'type',
            },
            {
                title: 'Incentive',
                dataIndex: 'incentive',
                key: 'incentive',
            },
            {
                title: 'Incentive Call To Action',
                dataIndex: 'incentiveCallToAction',
                key: 'incentiveCallToAction',
            },
            {
                title: 'Targeting',
                dataIndex: 'targeting',
                key: 'targeting',
                render: (value) => {
                    const formattedTargeting = value.map((target: any) => {
                        const formattedCountries = target.country[0].join(', ') // Join countries with a comma
                        return `Countries: ${formattedCountries}`
                    })

                    return (
                        <div>
                            {formattedTargeting.map((formattedTarget: any, index: any) => (
                                <div key={index}>{formattedTarget}</div>
                            ))}
                        </div>
                    )
                },
            },
        ],
    },
    form: {
        create: {
            fields: (
                <>
                    {/*<TextInput label="Name" name="name" placeholder="Name" required />*/}
                    {/*<TextInput label="Email" name="email" placeholder="Email" required />*/}
                    {/*<PasswordInput*/}
                    {/*    label="Password"*/}
                    {/*    name="password"*/}
                    {/*    placeholder="Password"*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<SelectInput*/}
                    {/*    label="Role"*/}
                    {/*    name="role"*/}
                    {/*    placeholder="Role"*/}
                    {/*    required*/}
                    {/*    options={[*/}
                    {/*        { label: 'Admin', value: 'admin' },*/}
                    {/*        { label: 'User', value: 'user' },*/}
                    {/*    ]}*/}
                    {/*/>*/}
                </>
            ),
        },
        edit: {
            fields: (
                <>
                    {/*<TextInput label="Name" name="name" placeholder="Name" required />*/}
                    {/*<TextInput label="Email" name="email" placeholder="Email" required />*/}
                    {/*<PasswordInput*/}
                    {/*    label="Password"*/}
                    {/*    name="password"*/}
                    {/*    placeholder="Password"*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*<SelectInput*/}
                    {/*    label="Role"*/}
                    {/*    name="role"*/}
                    {/*    placeholder="Role"*/}
                    {/*    required*/}
                    {/*    options={[*/}
                    {/*        { label: 'Admin', value: 'admin' },*/}
                    {/*        { label: 'User', value: 'user' },*/}
                    {/*    ]}*/}
                    {/*/>*/}
                </>
            ),
        },
    },
    create: {
        title: 'Create Offer',
    },
    update: {
        title: (id: string) => `Edit Offer #${id}`,
    },
})
