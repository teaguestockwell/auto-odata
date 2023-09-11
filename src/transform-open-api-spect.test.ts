import { hydrateRefs } from './transform-open-api-spec';

const spec = {
  openapi: '3.0.2',
  info: {
    title: 'Service for namespace ODataWebV3.Northwind.Model',
    description:
      'This service is located at [https://services.odata.org/V3/Northwind/Northwind.svc/](https://services.odata.org/V3/Northwind/Northwind.svc/)\n\n## Entity Data Model\n![ER Diagram](https://yuml.me/diagram/class/[Category{bg:lightslategray}],[CustomerDemographic{bg:lightslategray}],[Customer{bg:lightslategray}],[Customer]*-*[CustomerDemographic{bg:lightslategray}],[Employee{bg:lightslategray}],[Employee]*-0..1[Employee{bg:lightslategray}],[Order_Detail{bg:lightslategray}],[Order_Detail]*-[Order{bg:lightslategray}],[Order{bg:lightslategray}],[Order]*-0..1[Customer{bg:lightslategray}],[Order]*-0..1[Employee{bg:lightslategray}],[Product{bg:lightslategray}],[Product]*-0..1[Category{bg:lightslategray}],[Product]-*[Order_Detail{bg:lightslategray}],[Region{bg:lightslategray}],[Shipper{bg:lightslategray}],[Shipper]0..1-*[Order{bg:lightslategray}],[Supplier{bg:lightslategray}],[Supplier]0..1-*[Product{bg:lightslategray}],[Territory{bg:lightslategray}],[Territory]*-[Region{bg:lightslategray}],[Territory]*-*[Employee{bg:lightslategray}],[Alphabetical_list_of_product{bg:lightslategray}],[Category_Sales_for_1997{bg:lightslategray}],[Current_Product_List{bg:lightslategray}],[Customer_and_Suppliers_by_City{bg:lightslategray}],[Invoice{bg:lightslategray}],[Order_Details_Extended{bg:lightslategray}],[Order_Subtotal{bg:lightslategray}],[Orders_Qry{bg:lightslategray}],[Product_Sales_for_1997{bg:lightslategray}],[Products_Above_Average_Price{bg:lightslategray}],[Products_by_Category{bg:lightslategray}],[Sales_by_Category{bg:lightslategray}],[Sales_Totals_by_Amount{bg:lightslategray}],[Summary_of_Sales_by_Quarter{bg:lightslategray}],[Summary_of_Sales_by_Year{bg:lightslategray}],[Summary_of_Sales_by_Years%20{bg:lawngreen}]++-*>[Summary_of_Sales_by_Year],[Summary_of_Sales_by_Quarters%20{bg:lawngreen}]++-*>[Summary_of_Sales_by_Quarter],[Sales_Totals_by_Amounts%20{bg:lawngreen}]++-*>[Sales_Totals_by_Amount],[Sales_by_Categories%20{bg:lawngreen}]++-*>[Sales_by_Category],[Products_by_Categories%20{bg:lawngreen}]++-*>[Products_by_Category],[Products_Above_Average_Prices%20{bg:lawngreen}]++-*>[Products_Above_Average_Price],[Product_Sales_for_1997%20{bg:lawngreen}]++-*>[Product_Sales_for_1997],[Orders_Qries%20{bg:lawngreen}]++-*>[Orders_Qry],[Order_Subtotals%20{bg:lawngreen}]++-*>[Order_Subtotal],[Order_Details_Extendeds%20{bg:lawngreen}]++-*>[Order_Details_Extended],[Invoices%20{bg:lawngreen}]++-*>[Invoice],[Customer_and_Suppliers_by_Cities%20{bg:lawngreen}]++-*>[Customer_and_Suppliers_by_City],[Current_Product_Lists%20{bg:lawngreen}]++-*>[Current_Product_List],[Category_Sales_for_1997%20{bg:lawngreen}]++-*>[Category_Sales_for_1997],[Alphabetical_list_of_products%20{bg:lawngreen}]++-*>[Alphabetical_list_of_product],[Territories%20{bg:lawngreen}]++-*>[Territory],[Suppliers%20{bg:lawngreen}]++-*>[Supplier],[Shippers%20{bg:lawngreen}]++-*>[Shipper],[Regions%20{bg:lawngreen}]++-*>[Region],[Products%20{bg:lawngreen}]++-*>[Product],[Orders%20{bg:lawngreen}]++-*>[Order],[Order_Details%20{bg:lawngreen}]++-*>[Order_Detail],[Employees%20{bg:lawngreen}]++-*>[Employee],[Customers%20{bg:lawngreen}]++-*>[Customer],[CustomerDemographics%20{bg:lawngreen}]++-*>[CustomerDemographic],[Categories%20{bg:lawngreen}]++-*>[Category])\n\n### Legend\n![Legend](https://yuml.me/diagram/plain;dir:TB;scale:60/class/[External.Type{bg:whitesmoke}],[ComplexType],[EntityType{bg:lightslategray}],[EntitySet/Singleton/Operation{bg:lawngreen}])',
    version: '',
  },
  servers: [
    {
      url: 'https://services.odata.org/V3/Northwind/Northwind.svc',
    },
  ],
  tags: [
    {
      name: 'Categories',
    },
    {
      name: 'CustomerDemographics',
    },
    {
      name: 'Customers',
    },
    {
      name: 'Employees',
    },
    {
      name: 'Order_Details',
    },
    {
      name: 'Orders',
    },
    {
      name: 'Products',
    },
    {
      name: 'Regions',
    },
    {
      name: 'Shippers',
    },
    {
      name: 'Suppliers',
    },
    {
      name: 'Territories',
    },
    {
      name: 'Alphabetical_list_of_products',
    },
    {
      name: 'Category_Sales_for_1997',
    },
    {
      name: 'Current_Product_Lists',
    },
    {
      name: 'Customer_and_Suppliers_by_Cities',
    },
    {
      name: 'Invoices',
    },
    {
      name: 'Order_Details_Extendeds',
    },
    {
      name: 'Order_Subtotals',
    },
    {
      name: 'Orders_Qries',
    },
    {
      name: 'Product_Sales_for_1997',
    },
    {
      name: 'Products_Above_Average_Prices',
    },
    {
      name: 'Products_by_Categories',
    },
    {
      name: 'Sales_by_Categories',
    },
    {
      name: 'Sales_Totals_by_Amounts',
    },
    {
      name: 'Summary_of_Sales_by_Quarters',
    },
    {
      name: 'Summary_of_Sales_by_Years',
    },
  ],
  paths: {
    '/Categories': {
      get: {
        summary: 'Get entities from Categories',
        tags: ['Categories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryID',
                  'CategoryID desc',
                  'CategoryName',
                  'CategoryName desc',
                  'Description',
                  'Description desc',
                  'Picture',
                  'Picture desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryID', 'CategoryName', 'Description', 'Picture'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Category',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Category',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Categories',
        tags: ['Categories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Category-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Category',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Categories({CategoryID})': {
      parameters: [
        {
          description: 'key: CategoryID',
          in: 'path',
          name: 'CategoryID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Categories by key',
        tags: ['Categories'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryID', 'CategoryName', 'Description', 'Picture'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Category',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Categories',
        tags: ['Categories'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Category-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Categories',
        tags: ['Categories'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Categories({CategoryID})/Products': {
      parameters: [
        {
          description: 'key: CategoryID',
          in: 'path',
          name: 'CategoryID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Products',
        tags: ['Categories', 'Products'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'SupplierID',
                  'SupplierID desc',
                  'CategoryID',
                  'CategoryID desc',
                  'QuantityPerUnit',
                  'QuantityPerUnit desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'UnitsInStock',
                  'UnitsInStock desc',
                  'UnitsOnOrder',
                  'UnitsOnOrder desc',
                  'ReorderLevel',
                  'ReorderLevel desc',
                  'Discontinued',
                  'Discontinued desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Category', 'Order_Details', 'Supplier'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Product',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Product',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Products',
        tags: ['Categories', 'Products'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Product-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/CustomerDemographics': {
      get: {
        summary: 'Get entities from CustomerDemographics',
        tags: ['CustomerDemographics'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerTypeID',
                  'CustomerTypeID desc',
                  'CustomerDesc',
                  'CustomerDesc desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CustomerTypeID', 'CustomerDesc'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customers'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of CustomerDemographic',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to CustomerDemographics',
        tags: ['CustomerDemographics'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.CustomerDemographic-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/CustomerDemographics('{CustomerTypeID}')": {
      parameters: [
        {
          description: 'key: CustomerTypeID',
          in: 'path',
          name: 'CustomerTypeID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 10,
          },
        },
      ],
      get: {
        summary: 'Get entity from CustomerDemographics by key',
        tags: ['CustomerDemographics'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CustomerTypeID', 'CustomerDesc'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customers'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in CustomerDemographics',
        tags: ['CustomerDemographics'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.CustomerDemographic-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from CustomerDemographics',
        tags: ['CustomerDemographics'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/CustomerDemographics('{CustomerTypeID}')/Customers": {
      parameters: [
        {
          description: 'key: CustomerTypeID',
          in: 'path',
          name: 'CustomerTypeID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 10,
          },
        },
      ],
      get: {
        summary: 'Get entities from related Customers',
        tags: ['CustomerDemographics', 'Customers'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CustomerID desc',
                  'CompanyName',
                  'CompanyName desc',
                  'ContactName',
                  'ContactName desc',
                  'ContactTitle',
                  'ContactTitle desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'Phone',
                  'Phone desc',
                  'Fax',
                  'Fax desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders', 'CustomerDemographics'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Customer',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Customer',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Customers',
        tags: ['CustomerDemographics', 'Customers'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Customer-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Customers': {
      get: {
        summary: 'Get entities from Customers',
        tags: ['Customers'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CustomerID desc',
                  'CompanyName',
                  'CompanyName desc',
                  'ContactName',
                  'ContactName desc',
                  'ContactTitle',
                  'ContactTitle desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'Phone',
                  'Phone desc',
                  'Fax',
                  'Fax desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders', 'CustomerDemographics'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Customer',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Customer',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Customers',
        tags: ['Customers'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Customer-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Customers('{CustomerID}')": {
      parameters: [
        {
          description: 'key: CustomerID',
          in: 'path',
          name: 'CustomerID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 5,
          },
        },
      ],
      get: {
        summary: 'Get entity from Customers by key',
        tags: ['Customers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders', 'CustomerDemographics'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Customers',
        tags: ['Customers'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Customer-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Customers',
        tags: ['Customers'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Customers('{CustomerID}')/Orders": {
      parameters: [
        {
          description: 'key: CustomerID',
          in: 'path',
          name: 'CustomerID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 5,
          },
        },
      ],
      get: {
        summary: 'Get entities from related Orders',
        tags: ['Customers', 'Orders'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'CustomerID',
                  'CustomerID desc',
                  'EmployeeID',
                  'EmployeeID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipVia',
                  'ShipVia desc',
                  'Freight',
                  'Freight desc',
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Orders',
        tags: ['Customers', 'Orders'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Customers('{CustomerID}')/CustomerDemographics": {
      parameters: [
        {
          description: 'key: CustomerID',
          in: 'path',
          name: 'CustomerID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 5,
          },
        },
      ],
      get: {
        summary: 'Get entities from related CustomerDemographics',
        tags: ['Customers', 'CustomerDemographics'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerTypeID',
                  'CustomerTypeID desc',
                  'CustomerDesc',
                  'CustomerDesc desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CustomerTypeID', 'CustomerDesc'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customers'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of CustomerDemographic',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related CustomerDemographics',
        tags: ['Customers', 'CustomerDemographics'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.CustomerDemographic-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees': {
      get: {
        summary: 'Get entities from Employees',
        tags: ['Employees'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'EmployeeID desc',
                  'LastName',
                  'LastName desc',
                  'FirstName',
                  'FirstName desc',
                  'Title',
                  'Title desc',
                  'TitleOfCourtesy',
                  'TitleOfCourtesy desc',
                  'BirthDate',
                  'BirthDate desc',
                  'HireDate',
                  'HireDate desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'HomePhone',
                  'HomePhone desc',
                  'Extension',
                  'Extension desc',
                  'Photo',
                  'Photo desc',
                  'Notes',
                  'Notes desc',
                  'ReportsTo',
                  'ReportsTo desc',
                  'PhotoPath',
                  'PhotoPath desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Employee',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Employee',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Employees',
        tags: ['Employees'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Employee-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees({EmployeeID})': {
      parameters: [
        {
          description: 'key: EmployeeID',
          in: 'path',
          name: 'EmployeeID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Employees by key',
        tags: ['Employees'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Employees',
        tags: ['Employees'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Employee-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Employees',
        tags: ['Employees'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees({EmployeeID})/Employees1': {
      parameters: [
        {
          description: 'key: EmployeeID',
          in: 'path',
          name: 'EmployeeID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Employees1',
        tags: ['Employees'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'EmployeeID desc',
                  'LastName',
                  'LastName desc',
                  'FirstName',
                  'FirstName desc',
                  'Title',
                  'Title desc',
                  'TitleOfCourtesy',
                  'TitleOfCourtesy desc',
                  'BirthDate',
                  'BirthDate desc',
                  'HireDate',
                  'HireDate desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'HomePhone',
                  'HomePhone desc',
                  'Extension',
                  'Extension desc',
                  'Photo',
                  'Photo desc',
                  'Notes',
                  'Notes desc',
                  'ReportsTo',
                  'ReportsTo desc',
                  'PhotoPath',
                  'PhotoPath desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Employee',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Employee',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Employees1',
        tags: ['Employees'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Employee-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees({EmployeeID})/Employee1': {
      parameters: [
        {
          description: 'key: EmployeeID',
          in: 'path',
          name: 'EmployeeID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Employee1',
        tags: ['Employees'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees({EmployeeID})/Orders': {
      parameters: [
        {
          description: 'key: EmployeeID',
          in: 'path',
          name: 'EmployeeID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Orders',
        tags: ['Employees', 'Orders'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'CustomerID',
                  'CustomerID desc',
                  'EmployeeID',
                  'EmployeeID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipVia',
                  'ShipVia desc',
                  'Freight',
                  'Freight desc',
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Orders',
        tags: ['Employees', 'Orders'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Employees({EmployeeID})/Territories': {
      parameters: [
        {
          description: 'key: EmployeeID',
          in: 'path',
          name: 'EmployeeID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Territories',
        tags: ['Employees', 'Territories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'TerritoryID',
                  'TerritoryID desc',
                  'TerritoryDescription',
                  'TerritoryDescription desc',
                  'RegionID',
                  'RegionID desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['TerritoryID', 'TerritoryDescription', 'RegionID'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Region', 'Employees'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Territory',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Territory',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Territories',
        tags: ['Employees', 'Territories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Territory-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Territory',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Order_Details': {
      get: {
        summary: 'Get entities from Order_Details',
        tags: ['Order_Details'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'ProductID',
                  'ProductID desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'Quantity',
                  'Quantity desc',
                  'Discount',
                  'Discount desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'ProductID',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Order', 'Product'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order_Detail',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Order_Details',
        tags: ['Order_Details'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Detail-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Order_Details(OrderID={OrderID},ProductID={ProductID})': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Order_Details by key',
        tags: ['Order_Details'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'ProductID',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Order', 'Product'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Order_Details',
        tags: ['Order_Details'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Detail-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Order_Details',
        tags: ['Order_Details'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Order_Details(OrderID={OrderID},ProductID={ProductID})/Order': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Order',
        tags: ['Order_Details', 'Orders'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Order_Details(OrderID={OrderID},ProductID={ProductID})/Product': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Product',
        tags: ['Order_Details', 'Products'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Category', 'Order_Details', 'Supplier'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders': {
      get: {
        summary: 'Get entities from Orders',
        tags: ['Orders'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'CustomerID',
                  'CustomerID desc',
                  'EmployeeID',
                  'EmployeeID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipVia',
                  'ShipVia desc',
                  'Freight',
                  'Freight desc',
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Orders',
        tags: ['Orders'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders({OrderID})': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Orders by key',
        tags: ['Orders'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Orders',
        tags: ['Orders'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Orders',
        tags: ['Orders'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders({OrderID})/Customer': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Customer',
        tags: ['Orders', 'Customers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CustomerID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders', 'CustomerDemographics'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders({OrderID})/Employee': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Employee',
        tags: ['Orders', 'Employees'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders({OrderID})/Order_Details': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Order_Details',
        tags: ['Orders', 'Order_Details'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'ProductID',
                  'ProductID desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'Quantity',
                  'Quantity desc',
                  'Discount',
                  'Discount desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'ProductID',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Order', 'Product'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order_Detail',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Order_Details',
        tags: ['Orders', 'Order_Details'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Detail-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders({OrderID})/Shipper': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Shipper',
        tags: ['Orders', 'Shippers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShipperID', 'CompanyName', 'Phone'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Shipper',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products': {
      get: {
        summary: 'Get entities from Products',
        tags: ['Products'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'SupplierID',
                  'SupplierID desc',
                  'CategoryID',
                  'CategoryID desc',
                  'QuantityPerUnit',
                  'QuantityPerUnit desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'UnitsInStock',
                  'UnitsInStock desc',
                  'UnitsOnOrder',
                  'UnitsOnOrder desc',
                  'ReorderLevel',
                  'ReorderLevel desc',
                  'Discontinued',
                  'Discontinued desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Category', 'Order_Details', 'Supplier'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Product',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Product',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Products',
        tags: ['Products'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Product-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products({ProductID})': {
      parameters: [
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Products by key',
        tags: ['Products'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Category', 'Order_Details', 'Supplier'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Products',
        tags: ['Products'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Product-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Products',
        tags: ['Products'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products({ProductID})/Category': {
      parameters: [
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Category',
        tags: ['Products', 'Categories'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryID', 'CategoryName', 'Description', 'Picture'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Category',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products({ProductID})/Order_Details': {
      parameters: [
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Order_Details',
        tags: ['Products', 'Order_Details'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'ProductID',
                  'ProductID desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'Quantity',
                  'Quantity desc',
                  'Discount',
                  'Discount desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'ProductID',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Order', 'Product'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order_Detail',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Order_Details',
        tags: ['Products', 'Order_Details'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Detail-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Detail',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products({ProductID})/Supplier': {
      parameters: [
        {
          description: 'key: ProductID',
          in: 'path',
          name: 'ProductID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get related Supplier',
        tags: ['Products', 'Suppliers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'SupplierID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                  'HomePage',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Supplier',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Regions': {
      get: {
        summary: 'Get entities from Regions',
        tags: ['Regions'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'RegionID',
                  'RegionID desc',
                  'RegionDescription',
                  'RegionDescription desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['RegionID', 'RegionDescription'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Region',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Region',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Regions',
        tags: ['Regions'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Region-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Region',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Regions({RegionID})': {
      parameters: [
        {
          description: 'key: RegionID',
          in: 'path',
          name: 'RegionID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Regions by key',
        tags: ['Regions'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['RegionID', 'RegionDescription'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Region',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Regions',
        tags: ['Regions'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Region-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Regions',
        tags: ['Regions'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Regions({RegionID})/Territories': {
      parameters: [
        {
          description: 'key: RegionID',
          in: 'path',
          name: 'RegionID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Territories',
        tags: ['Regions', 'Territories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'TerritoryID',
                  'TerritoryID desc',
                  'TerritoryDescription',
                  'TerritoryDescription desc',
                  'RegionID',
                  'RegionID desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['TerritoryID', 'TerritoryDescription', 'RegionID'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Region', 'Employees'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Territory',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Territory',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Territories',
        tags: ['Regions', 'Territories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Territory-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Territory',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Shippers': {
      get: {
        summary: 'Get entities from Shippers',
        tags: ['Shippers'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ShipperID',
                  'ShipperID desc',
                  'CompanyName',
                  'CompanyName desc',
                  'Phone',
                  'Phone desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShipperID', 'CompanyName', 'Phone'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Shipper',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Shipper',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Shippers',
        tags: ['Shippers'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Shipper-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Shipper',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Shippers({ShipperID})': {
      parameters: [
        {
          description: 'key: ShipperID',
          in: 'path',
          name: 'ShipperID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Shippers by key',
        tags: ['Shippers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShipperID', 'CompanyName', 'Phone'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Orders'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Shipper',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Shippers',
        tags: ['Shippers'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Shipper-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Shippers',
        tags: ['Shippers'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Shippers({ShipperID})/Orders': {
      parameters: [
        {
          description: 'key: ShipperID',
          in: 'path',
          name: 'ShipperID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Orders',
        tags: ['Shippers', 'Orders'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'CustomerID',
                  'CustomerID desc',
                  'EmployeeID',
                  'EmployeeID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipVia',
                  'ShipVia desc',
                  'Freight',
                  'Freight desc',
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Customer', 'Employee', 'Order_Details', 'Shipper'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Orders',
        tags: ['Shippers', 'Orders'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Suppliers': {
      get: {
        summary: 'Get entities from Suppliers',
        tags: ['Suppliers'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'SupplierID',
                  'SupplierID desc',
                  'CompanyName',
                  'CompanyName desc',
                  'ContactName',
                  'ContactName desc',
                  'ContactTitle',
                  'ContactTitle desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'Phone',
                  'Phone desc',
                  'Fax',
                  'Fax desc',
                  'HomePage',
                  'HomePage desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'SupplierID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                  'HomePage',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Supplier',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Supplier',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Suppliers',
        tags: ['Suppliers'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Supplier-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Supplier',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Suppliers({SupplierID})': {
      parameters: [
        {
          description: 'key: SupplierID',
          in: 'path',
          name: 'SupplierID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Suppliers by key',
        tags: ['Suppliers'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'SupplierID',
                  'CompanyName',
                  'ContactName',
                  'ContactTitle',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Phone',
                  'Fax',
                  'HomePage',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Products'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Supplier',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Suppliers',
        tags: ['Suppliers'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Supplier-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Suppliers',
        tags: ['Suppliers'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Suppliers({SupplierID})/Products': {
      parameters: [
        {
          description: 'key: SupplierID',
          in: 'path',
          name: 'SupplierID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entities from related Products',
        tags: ['Suppliers', 'Products'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'SupplierID',
                  'SupplierID desc',
                  'CategoryID',
                  'CategoryID desc',
                  'QuantityPerUnit',
                  'QuantityPerUnit desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'UnitsInStock',
                  'UnitsInStock desc',
                  'UnitsOnOrder',
                  'UnitsOnOrder desc',
                  'ReorderLevel',
                  'ReorderLevel desc',
                  'Discontinued',
                  'Discontinued desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Category', 'Order_Details', 'Supplier'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Product',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Product',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Products',
        tags: ['Suppliers', 'Products'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Product-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Territories': {
      get: {
        summary: 'Get entities from Territories',
        tags: ['Territories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'TerritoryID',
                  'TerritoryID desc',
                  'TerritoryDescription',
                  'TerritoryDescription desc',
                  'RegionID',
                  'RegionID desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['TerritoryID', 'TerritoryDescription', 'RegionID'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Region', 'Employees'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Territory',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Territory',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Territories',
        tags: ['Territories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Territory-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Territory',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Territories('{TerritoryID}')": {
      parameters: [
        {
          description: 'key: TerritoryID',
          in: 'path',
          name: 'TerritoryID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 20,
          },
        },
      ],
      get: {
        summary: 'Get entity from Territories by key',
        tags: ['Territories'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['TerritoryID', 'TerritoryDescription', 'RegionID'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Region', 'Employees'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Territory',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Territories',
        tags: ['Territories'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Territory-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Territories',
        tags: ['Territories'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Territories('{TerritoryID}')/Region": {
      parameters: [
        {
          description: 'key: TerritoryID',
          in: 'path',
          name: 'TerritoryID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 20,
          },
        },
      ],
      get: {
        summary: 'Get related Region',
        tags: ['Territories', 'Regions'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['RegionID', 'RegionDescription'],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Region',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Territories('{TerritoryID}')/Employees": {
      parameters: [
        {
          description: 'key: TerritoryID',
          in: 'path',
          name: 'TerritoryID',
          required: true,
          schema: {
            type: 'string',
            maxLength: 20,
          },
        },
      ],
      get: {
        summary: 'Get entities from related Employees',
        tags: ['Territories', 'Employees'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'EmployeeID desc',
                  'LastName',
                  'LastName desc',
                  'FirstName',
                  'FirstName desc',
                  'Title',
                  'Title desc',
                  'TitleOfCourtesy',
                  'TitleOfCourtesy desc',
                  'BirthDate',
                  'BirthDate desc',
                  'HireDate',
                  'HireDate desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'HomePhone',
                  'HomePhone desc',
                  'Extension',
                  'Extension desc',
                  'Photo',
                  'Photo desc',
                  'Notes',
                  'Notes desc',
                  'ReportsTo',
                  'ReportsTo desc',
                  'PhotoPath',
                  'PhotoPath desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'EmployeeID',
                  'LastName',
                  'FirstName',
                  'Title',
                  'TitleOfCourtesy',
                  'BirthDate',
                  'HireDate',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'HomePhone',
                  'Extension',
                  'Photo',
                  'Notes',
                  'ReportsTo',
                  'PhotoPath',
                ],
              },
            },
          },
          {
            name: '$expand',
            description:
              'Expand related entities, see [Expand](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionexpand)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['*', 'Employees1', 'Employee1', 'Orders', 'Territories'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Employee',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Employee',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to related Employees',
        tags: ['Territories', 'Employees'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Employee-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Employee',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Alphabetical_list_of_products': {
      get: {
        summary: 'Get entities from Alphabetical_list_of_products',
        tags: ['Alphabetical_list_of_products'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'SupplierID',
                  'SupplierID desc',
                  'CategoryID',
                  'CategoryID desc',
                  'QuantityPerUnit',
                  'QuantityPerUnit desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'UnitsInStock',
                  'UnitsInStock desc',
                  'UnitsOnOrder',
                  'UnitsOnOrder desc',
                  'ReorderLevel',
                  'ReorderLevel desc',
                  'Discontinued',
                  'Discontinued desc',
                  'CategoryName',
                  'CategoryName desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductName',
                  'SupplierID',
                  'CategoryID',
                  'QuantityPerUnit',
                  'UnitPrice',
                  'UnitsInStock',
                  'UnitsOnOrder',
                  'ReorderLevel',
                  'Discontinued',
                  'CategoryName',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Alphabetical_list_of_product',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Alphabetical_list_of_product',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Alphabetical_list_of_products',
        tags: ['Alphabetical_list_of_products'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Alphabetical_list_of_product-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Alphabetical_list_of_product',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Alphabetical_list_of_products(CategoryName='{CategoryName}',Discontinued={Discontinued},ProductID={ProductID},ProductName='{ProductName}')":
      {
        parameters: [
          {
            description: 'key: CategoryName',
            in: 'path',
            name: 'CategoryName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 15,
            },
          },
          {
            description: 'key: Discontinued',
            in: 'path',
            name: 'Discontinued',
            required: true,
            schema: {
              type: 'boolean',
            },
          },
          {
            description: 'key: ProductID',
            in: 'path',
            name: 'ProductID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
        ],
        get: {
          summary: 'Get entity from Alphabetical_list_of_products by key',
          tags: ['Alphabetical_list_of_products'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: [
                    'ProductID',
                    'ProductName',
                    'SupplierID',
                    'CategoryID',
                    'QuantityPerUnit',
                    'UnitPrice',
                    'UnitsInStock',
                    'UnitsOnOrder',
                    'ReorderLevel',
                    'Discontinued',
                    'CategoryName',
                  ],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Alphabetical_list_of_product',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Alphabetical_list_of_products',
          tags: ['Alphabetical_list_of_products'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Alphabetical_list_of_product-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Alphabetical_list_of_products',
          tags: ['Alphabetical_list_of_products'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Category_Sales_for_1997': {
      get: {
        summary: 'Get entities from Category_Sales_for_1997',
        tags: ['Category_Sales_for_1997'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryName',
                  'CategoryName desc',
                  'CategorySales',
                  'CategorySales desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryName', 'CategorySales'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Category_Sales_for_1997',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Category_Sales_for_1997',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Category_Sales_for_1997',
        tags: ['Category_Sales_for_1997'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Category_Sales_for_1997-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Category_Sales_for_1997',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Category_Sales_for_1997('{CategoryName}')": {
      parameters: [
        {
          description: 'key: CategoryName',
          in: 'path',
          name: 'CategoryName',
          required: true,
          schema: {
            type: 'string',
            maxLength: 15,
          },
        },
      ],
      get: {
        summary: 'Get entity from Category_Sales_for_1997 by key',
        tags: ['Category_Sales_for_1997'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryName', 'CategorySales'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Category_Sales_for_1997',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Category_Sales_for_1997',
        tags: ['Category_Sales_for_1997'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Category_Sales_for_1997-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Category_Sales_for_1997',
        tags: ['Category_Sales_for_1997'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Current_Product_Lists': {
      get: {
        summary: 'Get entities from Current_Product_Lists',
        tags: ['Current_Product_Lists'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ProductID', 'ProductName'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Current_Product_List',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Current_Product_List',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Current_Product_Lists',
        tags: ['Current_Product_Lists'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Current_Product_List-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Current_Product_List',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Current_Product_Lists(ProductID={ProductID},ProductName='{ProductName}')":
      {
        parameters: [
          {
            description: 'key: ProductID',
            in: 'path',
            name: 'ProductID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
        ],
        get: {
          summary: 'Get entity from Current_Product_Lists by key',
          tags: ['Current_Product_Lists'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: ['ProductID', 'ProductName'],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Current_Product_List',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Current_Product_Lists',
          tags: ['Current_Product_Lists'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Current_Product_List-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Current_Product_Lists',
          tags: ['Current_Product_Lists'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Customer_and_Suppliers_by_Cities': {
      get: {
        summary: 'Get entities from Customer_and_Suppliers_by_Cities',
        tags: ['Customer_and_Suppliers_by_Cities'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'City',
                  'City desc',
                  'CompanyName',
                  'CompanyName desc',
                  'ContactName',
                  'ContactName desc',
                  'Relationship',
                  'Relationship desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['City', 'CompanyName', 'ContactName', 'Relationship'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Customer_and_Suppliers_by_City',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Customer_and_Suppliers_by_City',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Customer_and_Suppliers_by_Cities',
        tags: ['Customer_and_Suppliers_by_Cities'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Customer_and_Suppliers_by_City-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer_and_Suppliers_by_City',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Customer_and_Suppliers_by_Cities(CompanyName='{CompanyName}',Relationship='{Relationship}')":
      {
        parameters: [
          {
            description: 'key: CompanyName',
            in: 'path',
            name: 'CompanyName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
          {
            description: 'key: Relationship',
            in: 'path',
            name: 'Relationship',
            required: true,
            schema: {
              type: 'string',
              maxLength: 9,
            },
          },
        ],
        get: {
          summary: 'Get entity from Customer_and_Suppliers_by_Cities by key',
          tags: ['Customer_and_Suppliers_by_Cities'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: ['City', 'CompanyName', 'ContactName', 'Relationship'],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Customer_and_Suppliers_by_City',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Customer_and_Suppliers_by_Cities',
          tags: ['Customer_and_Suppliers_by_Cities'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Customer_and_Suppliers_by_City-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Customer_and_Suppliers_by_Cities',
          tags: ['Customer_and_Suppliers_by_Cities'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Invoices': {
      get: {
        summary: 'Get entities from Invoices',
        tags: ['Invoices'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                  'CustomerID',
                  'CustomerID desc',
                  'CustomerName',
                  'CustomerName desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                  'Salesperson',
                  'Salesperson desc',
                  'OrderID',
                  'OrderID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipperName',
                  'ShipperName desc',
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'Quantity',
                  'Quantity desc',
                  'Discount',
                  'Discount desc',
                  'ExtendedPrice',
                  'ExtendedPrice desc',
                  'Freight',
                  'Freight desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                  'CustomerID',
                  'CustomerName',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                  'Salesperson',
                  'OrderID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipperName',
                  'ProductID',
                  'ProductName',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                  'ExtendedPrice',
                  'Freight',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Invoice',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Invoice',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Invoices',
        tags: ['Invoices'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Invoice-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Invoice',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Invoices(CustomerName='{CustomerName}',Discount={Discount},OrderID={OrderID},ProductID={ProductID},ProductName='{ProductName}',Quantity={Quantity},Salesperson='{Salesperson}',ShipperName='{ShipperName}',UnitPrice={UnitPrice})":
      {
        parameters: [
          {
            description: 'key: CustomerName',
            in: 'path',
            name: 'CustomerName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
          {
            description: 'key: Discount',
            in: 'path',
            name: 'Discount',
            required: true,
            schema: {
              type: 'number',
              format: 'float',
              example: 3.14,
            },
          },
          {
            description: 'key: OrderID',
            in: 'path',
            name: 'OrderID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductID',
            in: 'path',
            name: 'ProductID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
          {
            description: 'key: Quantity',
            in: 'path',
            name: 'Quantity',
            required: true,
            schema: {
              type: 'integer',
              format: 'int16',
            },
          },
          {
            description: 'key: Salesperson',
            in: 'path',
            name: 'Salesperson',
            required: true,
            schema: {
              type: 'string',
              maxLength: 31,
            },
          },
          {
            description: 'key: ShipperName',
            in: 'path',
            name: 'ShipperName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
          {
            description: 'key: UnitPrice',
            in: 'path',
            name: 'UnitPrice',
            required: true,
            schema: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'string',
                },
              ],
              format: 'decimal',
              example: 0,
              multipleOf: 0.0001,
            },
          },
        ],
        get: {
          summary: 'Get entity from Invoices by key',
          tags: ['Invoices'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: [
                    'ShipName',
                    'ShipAddress',
                    'ShipCity',
                    'ShipRegion',
                    'ShipPostalCode',
                    'ShipCountry',
                    'CustomerID',
                    'CustomerName',
                    'Address',
                    'City',
                    'Region',
                    'PostalCode',
                    'Country',
                    'Salesperson',
                    'OrderID',
                    'OrderDate',
                    'RequiredDate',
                    'ShippedDate',
                    'ShipperName',
                    'ProductID',
                    'ProductName',
                    'UnitPrice',
                    'Quantity',
                    'Discount',
                    'ExtendedPrice',
                    'Freight',
                  ],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Invoice',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Invoices',
          tags: ['Invoices'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Invoice-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Invoices',
          tags: ['Invoices'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Order_Details_Extendeds': {
      get: {
        summary: 'Get entities from Order_Details_Extendeds',
        tags: ['Order_Details_Extendeds'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'ProductID',
                  'ProductID desc',
                  'ProductName',
                  'ProductName desc',
                  'UnitPrice',
                  'UnitPrice desc',
                  'Quantity',
                  'Quantity desc',
                  'Discount',
                  'Discount desc',
                  'ExtendedPrice',
                  'ExtendedPrice desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'ProductID',
                  'ProductName',
                  'UnitPrice',
                  'Quantity',
                  'Discount',
                  'ExtendedPrice',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order_Details_Extended',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order_Details_Extended',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Order_Details_Extendeds',
        tags: ['Order_Details_Extendeds'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Details_Extended-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Details_Extended',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Order_Details_Extendeds(Discount={Discount},OrderID={OrderID},ProductID={ProductID},ProductName='{ProductName}',Quantity={Quantity},UnitPrice={UnitPrice})":
      {
        parameters: [
          {
            description: 'key: Discount',
            in: 'path',
            name: 'Discount',
            required: true,
            schema: {
              type: 'number',
              format: 'float',
              example: 3.14,
            },
          },
          {
            description: 'key: OrderID',
            in: 'path',
            name: 'OrderID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductID',
            in: 'path',
            name: 'ProductID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
          {
            description: 'key: Quantity',
            in: 'path',
            name: 'Quantity',
            required: true,
            schema: {
              type: 'integer',
              format: 'int16',
            },
          },
          {
            description: 'key: UnitPrice',
            in: 'path',
            name: 'UnitPrice',
            required: true,
            schema: {
              anyOf: [
                {
                  type: 'number',
                },
                {
                  type: 'string',
                },
              ],
              format: 'decimal',
              example: 0,
              multipleOf: 0.0001,
            },
          },
        ],
        get: {
          summary: 'Get entity from Order_Details_Extendeds by key',
          tags: ['Order_Details_Extendeds'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: [
                    'OrderID',
                    'ProductID',
                    'ProductName',
                    'UnitPrice',
                    'Quantity',
                    'Discount',
                    'ExtendedPrice',
                  ],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Order_Details_Extended',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Order_Details_Extendeds',
          tags: ['Order_Details_Extendeds'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Details_Extended-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Order_Details_Extendeds',
          tags: ['Order_Details_Extendeds'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Order_Subtotals': {
      get: {
        summary: 'Get entities from Order_Subtotals',
        tags: ['Order_Subtotals'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['OrderID', 'OrderID desc', 'Subtotal', 'Subtotal desc'],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Order_Subtotal',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Order_Subtotal',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Order_Subtotals',
        tags: ['Order_Subtotals'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Subtotal-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Subtotal',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Order_Subtotals({OrderID})': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Order_Subtotals by key',
        tags: ['Order_Subtotals'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Order_Subtotal',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Order_Subtotals',
        tags: ['Order_Subtotals'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Order_Subtotal-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Order_Subtotals',
        tags: ['Order_Subtotals'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Orders_Qries': {
      get: {
        summary: 'Get entities from Orders_Qries',
        tags: ['Orders_Qries'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'OrderID desc',
                  'CustomerID',
                  'CustomerID desc',
                  'EmployeeID',
                  'EmployeeID desc',
                  'OrderDate',
                  'OrderDate desc',
                  'RequiredDate',
                  'RequiredDate desc',
                  'ShippedDate',
                  'ShippedDate desc',
                  'ShipVia',
                  'ShipVia desc',
                  'Freight',
                  'Freight desc',
                  'ShipName',
                  'ShipName desc',
                  'ShipAddress',
                  'ShipAddress desc',
                  'ShipCity',
                  'ShipCity desc',
                  'ShipRegion',
                  'ShipRegion desc',
                  'ShipPostalCode',
                  'ShipPostalCode desc',
                  'ShipCountry',
                  'ShipCountry desc',
                  'CompanyName',
                  'CompanyName desc',
                  'Address',
                  'Address desc',
                  'City',
                  'City desc',
                  'Region',
                  'Region desc',
                  'PostalCode',
                  'PostalCode desc',
                  'Country',
                  'Country desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                  'CompanyName',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Orders_Qry',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Orders_Qry',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Orders_Qries',
        tags: ['Orders_Qries'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Orders_Qry-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Orders_Qry',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Orders_Qries(CompanyName='{CompanyName}',OrderID={OrderID})": {
      parameters: [
        {
          description: 'key: CompanyName',
          in: 'path',
          name: 'CompanyName',
          required: true,
          schema: {
            type: 'string',
            maxLength: 40,
          },
        },
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Orders_Qries by key',
        tags: ['Orders_Qries'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'OrderID',
                  'CustomerID',
                  'EmployeeID',
                  'OrderDate',
                  'RequiredDate',
                  'ShippedDate',
                  'ShipVia',
                  'Freight',
                  'ShipName',
                  'ShipAddress',
                  'ShipCity',
                  'ShipRegion',
                  'ShipPostalCode',
                  'ShipCountry',
                  'CompanyName',
                  'Address',
                  'City',
                  'Region',
                  'PostalCode',
                  'Country',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Orders_Qry',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Orders_Qries',
        tags: ['Orders_Qries'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Orders_Qry-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Orders_Qries',
        tags: ['Orders_Qries'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Product_Sales_for_1997': {
      get: {
        summary: 'Get entities from Product_Sales_for_1997',
        tags: ['Product_Sales_for_1997'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryName',
                  'CategoryName desc',
                  'ProductName',
                  'ProductName desc',
                  'ProductSales',
                  'ProductSales desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['CategoryName', 'ProductName', 'ProductSales'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Product_Sales_for_1997',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Product_Sales_for_1997',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Product_Sales_for_1997',
        tags: ['Product_Sales_for_1997'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Product_Sales_for_1997-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product_Sales_for_1997',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Product_Sales_for_1997(CategoryName='{CategoryName}',ProductName='{ProductName}')":
      {
        parameters: [
          {
            description: 'key: CategoryName',
            in: 'path',
            name: 'CategoryName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 15,
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
        ],
        get: {
          summary: 'Get entity from Product_Sales_for_1997 by key',
          tags: ['Product_Sales_for_1997'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: ['CategoryName', 'ProductName', 'ProductSales'],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Product_Sales_for_1997',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Product_Sales_for_1997',
          tags: ['Product_Sales_for_1997'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Product_Sales_for_1997-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Product_Sales_for_1997',
          tags: ['Product_Sales_for_1997'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Products_Above_Average_Prices': {
      get: {
        summary: 'Get entities from Products_Above_Average_Prices',
        tags: ['Products_Above_Average_Prices'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ProductName',
                  'ProductName desc',
                  'UnitPrice',
                  'UnitPrice desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ProductName', 'UnitPrice'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Products_Above_Average_Price',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Products_Above_Average_Price',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Products_Above_Average_Prices',
        tags: ['Products_Above_Average_Prices'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Products_Above_Average_Price-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Products_Above_Average_Price',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Products_Above_Average_Prices('{ProductName}')": {
      parameters: [
        {
          description: 'key: ProductName',
          in: 'path',
          name: 'ProductName',
          required: true,
          schema: {
            type: 'string',
            maxLength: 40,
          },
        },
      ],
      get: {
        summary: 'Get entity from Products_Above_Average_Prices by key',
        tags: ['Products_Above_Average_Prices'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ProductName', 'UnitPrice'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Products_Above_Average_Price',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Products_Above_Average_Prices',
        tags: ['Products_Above_Average_Prices'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Products_Above_Average_Price-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Products_Above_Average_Prices',
        tags: ['Products_Above_Average_Prices'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Products_by_Categories': {
      get: {
        summary: 'Get entities from Products_by_Categories',
        tags: ['Products_by_Categories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryName',
                  'CategoryName desc',
                  'ProductName',
                  'ProductName desc',
                  'QuantityPerUnit',
                  'QuantityPerUnit desc',
                  'UnitsInStock',
                  'UnitsInStock desc',
                  'Discontinued',
                  'Discontinued desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryName',
                  'ProductName',
                  'QuantityPerUnit',
                  'UnitsInStock',
                  'Discontinued',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Products_by_Category',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Products_by_Category',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Products_by_Categories',
        tags: ['Products_by_Categories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Products_by_Category-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Products_by_Category',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Products_by_Categories(CategoryName='{CategoryName}',Discontinued={Discontinued},ProductName='{ProductName}')":
      {
        parameters: [
          {
            description: 'key: CategoryName',
            in: 'path',
            name: 'CategoryName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 15,
            },
          },
          {
            description: 'key: Discontinued',
            in: 'path',
            name: 'Discontinued',
            required: true,
            schema: {
              type: 'boolean',
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
        ],
        get: {
          summary: 'Get entity from Products_by_Categories by key',
          tags: ['Products_by_Categories'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: [
                    'CategoryName',
                    'ProductName',
                    'QuantityPerUnit',
                    'UnitsInStock',
                    'Discontinued',
                  ],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Products_by_Category',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Products_by_Categories',
          tags: ['Products_by_Categories'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Products_by_Category-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Products_by_Categories',
          tags: ['Products_by_Categories'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Sales_by_Categories': {
      get: {
        summary: 'Get entities from Sales_by_Categories',
        tags: ['Sales_by_Categories'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryID',
                  'CategoryID desc',
                  'CategoryName',
                  'CategoryName desc',
                  'ProductName',
                  'ProductName desc',
                  'ProductSales',
                  'ProductSales desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'CategoryID',
                  'CategoryName',
                  'ProductName',
                  'ProductSales',
                ],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Sales_by_Category',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Sales_by_Category',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Sales_by_Categories',
        tags: ['Sales_by_Categories'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Sales_by_Category-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Sales_by_Category',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Sales_by_Categories(CategoryID={CategoryID},CategoryName='{CategoryName}',ProductName='{ProductName}')":
      {
        parameters: [
          {
            description: 'key: CategoryID',
            in: 'path',
            name: 'CategoryID',
            required: true,
            schema: {
              type: 'integer',
              format: 'int32',
            },
          },
          {
            description: 'key: CategoryName',
            in: 'path',
            name: 'CategoryName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 15,
            },
          },
          {
            description: 'key: ProductName',
            in: 'path',
            name: 'ProductName',
            required: true,
            schema: {
              type: 'string',
              maxLength: 40,
            },
          },
        ],
        get: {
          summary: 'Get entity from Sales_by_Categories by key',
          tags: ['Sales_by_Categories'],
          parameters: [
            {
              name: '$select',
              description:
                'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
              in: 'query',
              explode: false,
              schema: {
                type: 'array',
                uniqueItems: true,
                items: {
                  type: 'string',
                  enum: [
                    'CategoryID',
                    'CategoryName',
                    'ProductName',
                    'ProductSales',
                  ],
                },
              },
            },
          ],
          responses: {
            '200': {
              description: 'Retrieved entity',
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/NorthwindModel.Sales_by_Category',
                  },
                },
              },
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        patch: {
          summary: 'Update entity in Sales_by_Categories',
          tags: ['Sales_by_Categories'],
          requestBody: {
            description: 'New property values',
            required: true,
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Sales_by_Category-update',
                },
              },
            },
          },
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
        delete: {
          summary: 'Delete entity from Sales_by_Categories',
          tags: ['Sales_by_Categories'],
          responses: {
            '204': {
              description: 'Success',
            },
            '4XX': {
              $ref: '#/components/responses/error',
            },
          },
        },
      },
    '/Sales_Totals_by_Amounts': {
      get: {
        summary: 'Get entities from Sales_Totals_by_Amounts',
        tags: ['Sales_Totals_by_Amounts'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'SaleAmount',
                  'SaleAmount desc',
                  'OrderID',
                  'OrderID desc',
                  'CompanyName',
                  'CompanyName desc',
                  'ShippedDate',
                  'ShippedDate desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['SaleAmount', 'OrderID', 'CompanyName', 'ShippedDate'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Sales_Totals_by_Amount',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Sales_Totals_by_Amount',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Sales_Totals_by_Amounts',
        tags: ['Sales_Totals_by_Amounts'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Sales_Totals_by_Amount-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Sales_Totals_by_Amount',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    "/Sales_Totals_by_Amounts(CompanyName='{CompanyName}',OrderID={OrderID})": {
      parameters: [
        {
          description: 'key: CompanyName',
          in: 'path',
          name: 'CompanyName',
          required: true,
          schema: {
            type: 'string',
            maxLength: 40,
          },
        },
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Sales_Totals_by_Amounts by key',
        tags: ['Sales_Totals_by_Amounts'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['SaleAmount', 'OrderID', 'CompanyName', 'ShippedDate'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Sales_Totals_by_Amount',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Sales_Totals_by_Amounts',
        tags: ['Sales_Totals_by_Amounts'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Sales_Totals_by_Amount-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Sales_Totals_by_Amounts',
        tags: ['Sales_Totals_by_Amounts'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Summary_of_Sales_by_Quarters': {
      get: {
        summary: 'Get entities from Summary_of_Sales_by_Quarters',
        tags: ['Summary_of_Sales_by_Quarters'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ShippedDate',
                  'ShippedDate desc',
                  'OrderID',
                  'OrderID desc',
                  'Subtotal',
                  'Subtotal desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShippedDate', 'OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Summary_of_Sales_by_Quarter',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Quarter',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Summary_of_Sales_by_Quarters',
        tags: ['Summary_of_Sales_by_Quarters'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Quarter-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Quarter',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Summary_of_Sales_by_Quarters({OrderID})': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Summary_of_Sales_by_Quarters by key',
        tags: ['Summary_of_Sales_by_Quarters'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShippedDate', 'OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Quarter',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Summary_of_Sales_by_Quarters',
        tags: ['Summary_of_Sales_by_Quarters'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Quarter-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Summary_of_Sales_by_Quarters',
        tags: ['Summary_of_Sales_by_Quarters'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Summary_of_Sales_by_Years': {
      get: {
        summary: 'Get entities from Summary_of_Sales_by_Years',
        tags: ['Summary_of_Sales_by_Years'],
        parameters: [
          {
            $ref: '#/components/parameters/top',
          },
          {
            $ref: '#/components/parameters/skip',
          },
          {
            name: '$filter',
            description:
              'Filter items by property values, see [Filtering](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter)',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
          {
            $ref: '#/components/parameters/count',
          },
          {
            name: '$orderby',
            description:
              'Order items by property values, see [Sorting](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionorderby)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: [
                  'ShippedDate',
                  'ShippedDate desc',
                  'OrderID',
                  'OrderID desc',
                  'Subtotal',
                  'Subtotal desc',
                ],
              },
            },
          },
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShippedDate', 'OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entities',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  title: 'Collection of Summary_of_Sales_by_Year',
                  properties: {
                    '@odata.count': {
                      $ref: '#/components/schemas/count',
                    },
                    value: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Year',
                      },
                    },
                  },
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      post: {
        summary: 'Add new entity to Summary_of_Sales_by_Years',
        tags: ['Summary_of_Sales_by_Years'],
        requestBody: {
          description: 'New entity',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Year-create',
              },
            },
          },
        },
        responses: {
          '201': {
            description: 'Created entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Year',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/Summary_of_Sales_by_Years({OrderID})': {
      parameters: [
        {
          description: 'key: OrderID',
          in: 'path',
          name: 'OrderID',
          required: true,
          schema: {
            type: 'integer',
            format: 'int32',
          },
        },
      ],
      get: {
        summary: 'Get entity from Summary_of_Sales_by_Years by key',
        tags: ['Summary_of_Sales_by_Years'],
        parameters: [
          {
            name: '$select',
            description:
              'Select properties to be returned, see [Select](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionselect)',
            in: 'query',
            explode: false,
            schema: {
              type: 'array',
              uniqueItems: true,
              items: {
                type: 'string',
                enum: ['ShippedDate', 'OrderID', 'Subtotal'],
              },
            },
          },
        ],
        responses: {
          '200': {
            description: 'Retrieved entity',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Year',
                },
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      patch: {
        summary: 'Update entity in Summary_of_Sales_by_Years',
        tags: ['Summary_of_Sales_by_Years'],
        requestBody: {
          description: 'New property values',
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/NorthwindModel.Summary_of_Sales_by_Year-update',
              },
            },
          },
        },
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
      delete: {
        summary: 'Delete entity from Summary_of_Sales_by_Years',
        tags: ['Summary_of_Sales_by_Years'],
        responses: {
          '204': {
            description: 'Success',
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
    '/$batch': {
      post: {
        summary: 'Send a group of requests',
        description:
          'Group multiple requests into a single request payload, see [Batch Requests](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_BatchRequests).\n\n*Please note that "Try it out" is not supported for this request.*',
        tags: ['Batch Requests'],
        requestBody: {
          required: true,
          description: 'Batch request',
          content: {
            'multipart/mixed;boundary=request-separator': {
              schema: {
                type: 'string',
              },
              example:
                '--request-separator\nContent-Type: application/http\nContent-Transfer-Encoding: binary\n\nGET Categories HTTP/1.1\nAccept: application/json\n\n\n--request-separator--',
            },
          },
        },
        responses: {
          '202': {
            description: 'Batch response',
            content: {
              'multipart/mixed': {
                schema: {
                  type: 'string',
                },
                example:
                  '--response-separator\nContent-Type: application/http\n\nHTTP/1.1 200 OK\nContent-Type: application/json\n\n{...}\n--response-separator--',
              },
            },
          },
          '4XX': {
            $ref: '#/components/responses/error',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      'NorthwindModel.Alphabetical_list_of_product': {
        title: 'Alphabetical_list_of_product',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
        },
      },
      'NorthwindModel.Alphabetical_list_of_product-create': {
        title: 'Alphabetical_list_of_product (for create)',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
        },
        required: ['CategoryName', 'Discontinued', 'ProductID', 'ProductName'],
      },
      'NorthwindModel.Alphabetical_list_of_product-update': {
        title: 'Alphabetical_list_of_product (for update)',
        type: 'object',
        properties: {
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Category': {
        title: 'Category',
        type: 'object',
        properties: {
          CategoryID: {
            type: 'integer',
            format: 'int32',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          Description: {
            type: 'string',
            nullable: true,
          },
          Picture: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
          Products: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Product',
            },
          },
          'Products@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Category-create': {
        title: 'Category (for create)',
        type: 'object',
        properties: {
          CategoryID: {
            type: 'integer',
            format: 'int32',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          Description: {
            type: 'string',
            nullable: true,
          },
          Picture: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
        },
        required: ['CategoryID'],
      },
      'NorthwindModel.Category-update': {
        title: 'Category (for update)',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          Description: {
            type: 'string',
            nullable: true,
          },
          Picture: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Category_Sales_for_1997': {
        title: 'Category_Sales_for_1997',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          CategorySales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Category_Sales_for_1997-create': {
        title: 'Category_Sales_for_1997 (for create)',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          CategorySales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['CategoryName'],
      },
      'NorthwindModel.Category_Sales_for_1997-update': {
        title: 'Category_Sales_for_1997 (for update)',
        type: 'object',
        properties: {
          CategorySales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Current_Product_List': {
        title: 'Current_Product_List',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
        },
      },
      'NorthwindModel.Current_Product_List-create': {
        title: 'Current_Product_List (for create)',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
        },
        required: ['ProductID', 'ProductName'],
      },
      'NorthwindModel.Current_Product_List-update': {
        title: 'Current_Product_List (for update)',
        type: 'object',
      },
      'NorthwindModel.Customer': {
        title: 'Customer',
        type: 'object',
        properties: {
          CustomerID: {
            type: 'string',
            maxLength: 5,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Order',
            },
          },
          'Orders@count': {
            $ref: '#/components/schemas/count',
          },
          CustomerDemographics: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.CustomerDemographic',
            },
          },
          'CustomerDemographics@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Customer-create': {
        title: 'Customer (for create)',
        type: 'object',
        properties: {
          CustomerID: {
            type: 'string',
            maxLength: 5,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
        },
        required: ['CustomerID'],
      },
      'NorthwindModel.Customer-update': {
        title: 'Customer (for update)',
        type: 'object',
        properties: {
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
        },
      },
      'NorthwindModel.CustomerDemographic': {
        title: 'CustomerDemographic',
        type: 'object',
        properties: {
          CustomerTypeID: {
            type: 'string',
            maxLength: 10,
          },
          CustomerDesc: {
            type: 'string',
            nullable: true,
          },
          Customers: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Customer',
            },
          },
          'Customers@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.CustomerDemographic-create': {
        title: 'CustomerDemographic (for create)',
        type: 'object',
        properties: {
          CustomerTypeID: {
            type: 'string',
            maxLength: 10,
          },
          CustomerDesc: {
            type: 'string',
            nullable: true,
          },
        },
        required: ['CustomerTypeID'],
      },
      'NorthwindModel.CustomerDemographic-update': {
        title: 'CustomerDemographic (for update)',
        type: 'object',
        properties: {
          CustomerDesc: {
            type: 'string',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Customer_and_Suppliers_by_City': {
        title: 'Customer_and_Suppliers_by_City',
        type: 'object',
        properties: {
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Relationship: {
            type: 'string',
            maxLength: 9,
          },
        },
      },
      'NorthwindModel.Customer_and_Suppliers_by_City-create': {
        title: 'Customer_and_Suppliers_by_City (for create)',
        type: 'object',
        properties: {
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Relationship: {
            type: 'string',
            maxLength: 9,
          },
        },
        required: ['CompanyName', 'Relationship'],
      },
      'NorthwindModel.Customer_and_Suppliers_by_City-update': {
        title: 'Customer_and_Suppliers_by_City (for update)',
        type: 'object',
        properties: {
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Employee': {
        title: 'Employee',
        type: 'object',
        properties: {
          EmployeeID: {
            type: 'integer',
            format: 'int32',
          },
          LastName: {
            type: 'string',
            maxLength: 20,
          },
          FirstName: {
            type: 'string',
            maxLength: 10,
          },
          Title: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          TitleOfCourtesy: {
            type: 'string',
            maxLength: 25,
            nullable: true,
          },
          BirthDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          HireDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          HomePhone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Extension: {
            type: 'string',
            maxLength: 4,
            nullable: true,
          },
          Photo: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
          Notes: {
            type: 'string',
            nullable: true,
          },
          ReportsTo: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          PhotoPath: {
            type: 'string',
            maxLength: 255,
            nullable: true,
          },
          Employees1: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Employee',
            },
          },
          'Employees1@count': {
            $ref: '#/components/schemas/count',
          },
          Employee1: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Employee',
              },
            ],
            nullable: true,
          },
          Orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Order',
            },
          },
          'Orders@count': {
            $ref: '#/components/schemas/count',
          },
          Territories: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Territory',
            },
          },
          'Territories@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Employee-create': {
        title: 'Employee (for create)',
        type: 'object',
        properties: {
          EmployeeID: {
            type: 'integer',
            format: 'int32',
          },
          LastName: {
            type: 'string',
            maxLength: 20,
          },
          FirstName: {
            type: 'string',
            maxLength: 10,
          },
          Title: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          TitleOfCourtesy: {
            type: 'string',
            maxLength: 25,
            nullable: true,
          },
          BirthDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          HireDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          HomePhone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Extension: {
            type: 'string',
            maxLength: 4,
            nullable: true,
          },
          Photo: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
          Notes: {
            type: 'string',
            nullable: true,
          },
          ReportsTo: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          PhotoPath: {
            type: 'string',
            maxLength: 255,
            nullable: true,
          },
        },
        required: ['EmployeeID'],
      },
      'NorthwindModel.Employee-update': {
        title: 'Employee (for update)',
        type: 'object',
        properties: {
          LastName: {
            type: 'string',
            maxLength: 20,
          },
          FirstName: {
            type: 'string',
            maxLength: 10,
          },
          Title: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          TitleOfCourtesy: {
            type: 'string',
            maxLength: 25,
            nullable: true,
          },
          BirthDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          HireDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          HomePhone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Extension: {
            type: 'string',
            maxLength: 4,
            nullable: true,
          },
          Photo: {
            type: 'string',
            format: 'base64url',
            nullable: true,
          },
          Notes: {
            type: 'string',
            nullable: true,
          },
          ReportsTo: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          PhotoPath: {
            type: 'string',
            maxLength: 255,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Invoice': {
        title: 'Invoice',
        type: 'object',
        properties: {
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          CustomerName: {
            type: 'string',
            maxLength: 40,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Salesperson: {
            type: 'string',
            maxLength: 31,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipperName: {
            type: 'string',
            maxLength: 40,
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Invoice-create': {
        title: 'Invoice (for create)',
        type: 'object',
        properties: {
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          CustomerName: {
            type: 'string',
            maxLength: 40,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Salesperson: {
            type: 'string',
            maxLength: 31,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipperName: {
            type: 'string',
            maxLength: 40,
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: [
          'CustomerName',
          'Discount',
          'OrderID',
          'ProductID',
          'ProductName',
          'Quantity',
          'Salesperson',
          'ShipperName',
          'UnitPrice',
        ],
      },
      'NorthwindModel.Invoice-update': {
        title: 'Invoice (for update)',
        type: 'object',
        properties: {
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order': {
        title: 'Order',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Customer: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Customer',
              },
            ],
            nullable: true,
          },
          Employee: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Employee',
              },
            ],
            nullable: true,
          },
          Order_Details: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Order_Detail',
            },
          },
          'Order_Details@count': {
            $ref: '#/components/schemas/count',
          },
          Shipper: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Shipper',
              },
            ],
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order-create': {
        title: 'Order (for create)',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
        },
        required: ['OrderID'],
      },
      'NorthwindModel.Order-update': {
        title: 'Order (for update)',
        type: 'object',
        properties: {
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order_Detail': {
        title: 'Order_Detail',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
          Order: {
            $ref: '#/components/schemas/NorthwindModel.Order',
          },
          Product: {
            $ref: '#/components/schemas/NorthwindModel.Product',
          },
        },
      },
      'NorthwindModel.Order_Detail-create': {
        title: 'Order_Detail (for create)',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
        },
        required: ['OrderID', 'ProductID'],
      },
      'NorthwindModel.Order_Detail-update': {
        title: 'Order_Detail (for update)',
        type: 'object',
        properties: {
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
        },
      },
      'NorthwindModel.Order_Details_Extended': {
        title: 'Order_Details_Extended',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order_Details_Extended-create': {
        title: 'Order_Details_Extended (for create)',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
          },
          Quantity: {
            type: 'integer',
            format: 'int16',
          },
          Discount: {
            type: 'number',
            format: 'float',
            example: 3.14,
          },
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: [
          'Discount',
          'OrderID',
          'ProductID',
          'ProductName',
          'Quantity',
          'UnitPrice',
        ],
      },
      'NorthwindModel.Order_Details_Extended-update': {
        title: 'Order_Details_Extended (for update)',
        type: 'object',
        properties: {
          ExtendedPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order_Subtotal': {
        title: 'Order_Subtotal',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Order_Subtotal-create': {
        title: 'Order_Subtotal (for create)',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['OrderID'],
      },
      'NorthwindModel.Order_Subtotal-update': {
        title: 'Order_Subtotal (for update)',
        type: 'object',
        properties: {
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Orders_Qry': {
        title: 'Orders_Qry',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Orders_Qry-create': {
        title: 'Orders_Qry (for create)',
        type: 'object',
        properties: {
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
        },
        required: ['CompanyName', 'OrderID'],
      },
      'NorthwindModel.Orders_Qry-update': {
        title: 'Orders_Qry (for update)',
        type: 'object',
        properties: {
          CustomerID: {
            type: 'string',
            maxLength: 5,
            nullable: true,
          },
          EmployeeID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          OrderDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          RequiredDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          ShipVia: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          Freight: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShipName: {
            type: 'string',
            maxLength: 40,
            nullable: true,
          },
          ShipAddress: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          ShipCity: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipRegion: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          ShipPostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          ShipCountry: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Product': {
        title: 'Product',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
          Category: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Category',
              },
            ],
            nullable: true,
          },
          Order_Details: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Order_Detail',
            },
          },
          'Order_Details@count': {
            $ref: '#/components/schemas/count',
          },
          Supplier: {
            allOf: [
              {
                $ref: '#/components/schemas/NorthwindModel.Supplier',
              },
            ],
            nullable: true,
          },
        },
      },
      'NorthwindModel.Product-create': {
        title: 'Product (for create)',
        type: 'object',
        properties: {
          ProductID: {
            type: 'integer',
            format: 'int32',
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
        },
        required: ['ProductID'],
      },
      'NorthwindModel.Product-update': {
        title: 'Product (for update)',
        type: 'object',
        properties: {
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          SupplierID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          CategoryID: {
            type: 'integer',
            format: 'int32',
            nullable: true,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          UnitsOnOrder: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          ReorderLevel: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
        },
      },
      'NorthwindModel.Product_Sales_for_1997': {
        title: 'Product_Sales_for_1997',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Product_Sales_for_1997-create': {
        title: 'Product_Sales_for_1997 (for create)',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['CategoryName', 'ProductName'],
      },
      'NorthwindModel.Product_Sales_for_1997-update': {
        title: 'Product_Sales_for_1997 (for update)',
        type: 'object',
        properties: {
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Products_Above_Average_Price': {
        title: 'Products_Above_Average_Price',
        type: 'object',
        properties: {
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Products_Above_Average_Price-create': {
        title: 'Products_Above_Average_Price (for create)',
        type: 'object',
        properties: {
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['ProductName'],
      },
      'NorthwindModel.Products_Above_Average_Price-update': {
        title: 'Products_Above_Average_Price (for update)',
        type: 'object',
        properties: {
          UnitPrice: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Products_by_Category': {
        title: 'Products_by_Category',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
        },
      },
      'NorthwindModel.Products_by_Category-create': {
        title: 'Products_by_Category (for create)',
        type: 'object',
        properties: {
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
          Discontinued: {
            type: 'boolean',
          },
        },
        required: ['CategoryName', 'Discontinued', 'ProductName'],
      },
      'NorthwindModel.Products_by_Category-update': {
        title: 'Products_by_Category (for update)',
        type: 'object',
        properties: {
          QuantityPerUnit: {
            type: 'string',
            maxLength: 20,
            nullable: true,
          },
          UnitsInStock: {
            type: 'integer',
            format: 'int16',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Region': {
        title: 'Region',
        type: 'object',
        properties: {
          RegionID: {
            type: 'integer',
            format: 'int32',
          },
          RegionDescription: {
            type: 'string',
            maxLength: 50,
          },
          Territories: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Territory',
            },
          },
          'Territories@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Region-create': {
        title: 'Region (for create)',
        type: 'object',
        properties: {
          RegionID: {
            type: 'integer',
            format: 'int32',
          },
          RegionDescription: {
            type: 'string',
            maxLength: 50,
          },
        },
        required: ['RegionID'],
      },
      'NorthwindModel.Region-update': {
        title: 'Region (for update)',
        type: 'object',
        properties: {
          RegionDescription: {
            type: 'string',
            maxLength: 50,
          },
        },
      },
      'NorthwindModel.Sales_Totals_by_Amount': {
        title: 'Sales_Totals_by_Amount',
        type: 'object',
        properties: {
          SaleAmount: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Sales_Totals_by_Amount-create': {
        title: 'Sales_Totals_by_Amount (for create)',
        type: 'object',
        properties: {
          SaleAmount: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
        },
        required: ['CompanyName', 'OrderID'],
      },
      'NorthwindModel.Sales_Totals_by_Amount-update': {
        title: 'Sales_Totals_by_Amount (for update)',
        type: 'object',
        properties: {
          SaleAmount: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Sales_by_Category': {
        title: 'Sales_by_Category',
        type: 'object',
        properties: {
          CategoryID: {
            type: 'integer',
            format: 'int32',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Sales_by_Category-create': {
        title: 'Sales_by_Category (for create)',
        type: 'object',
        properties: {
          CategoryID: {
            type: 'integer',
            format: 'int32',
          },
          CategoryName: {
            type: 'string',
            maxLength: 15,
          },
          ProductName: {
            type: 'string',
            maxLength: 40,
          },
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['CategoryID', 'CategoryName', 'ProductName'],
      },
      'NorthwindModel.Sales_by_Category-update': {
        title: 'Sales_by_Category (for update)',
        type: 'object',
        properties: {
          ProductSales: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Shipper': {
        title: 'Shipper',
        type: 'object',
        properties: {
          ShipperID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Orders: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Order',
            },
          },
          'Orders@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Shipper-create': {
        title: 'Shipper (for create)',
        type: 'object',
        properties: {
          ShipperID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
        },
        required: ['ShipperID'],
      },
      'NorthwindModel.Shipper-update': {
        title: 'Shipper (for update)',
        type: 'object',
        properties: {
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Summary_of_Sales_by_Quarter': {
        title: 'Summary_of_Sales_by_Quarter',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Summary_of_Sales_by_Quarter-create': {
        title: 'Summary_of_Sales_by_Quarter (for create)',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['OrderID'],
      },
      'NorthwindModel.Summary_of_Sales_by_Quarter-update': {
        title: 'Summary_of_Sales_by_Quarter (for update)',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Summary_of_Sales_by_Year': {
        title: 'Summary_of_Sales_by_Year',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Summary_of_Sales_by_Year-create': {
        title: 'Summary_of_Sales_by_Year (for create)',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          OrderID: {
            type: 'integer',
            format: 'int32',
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
        required: ['OrderID'],
      },
      'NorthwindModel.Summary_of_Sales_by_Year-update': {
        title: 'Summary_of_Sales_by_Year (for update)',
        type: 'object',
        properties: {
          ShippedDate: {
            type: 'string',
            format: 'date-time',
            example: '2017-04-13T15:51:04Z',
            nullable: true,
          },
          Subtotal: {
            anyOf: [
              {
                type: 'number',
              },
              {
                type: 'string',
              },
            ],
            format: 'decimal',
            example: 0,
            multipleOf: 0.0001,
            nullable: true,
          },
        },
      },
      'NorthwindModel.Supplier': {
        title: 'Supplier',
        type: 'object',
        properties: {
          SupplierID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          HomePage: {
            type: 'string',
            nullable: true,
          },
          Products: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Product',
            },
          },
          'Products@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Supplier-create': {
        title: 'Supplier (for create)',
        type: 'object',
        properties: {
          SupplierID: {
            type: 'integer',
            format: 'int32',
          },
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          HomePage: {
            type: 'string',
            nullable: true,
          },
        },
        required: ['SupplierID'],
      },
      'NorthwindModel.Supplier-update': {
        title: 'Supplier (for update)',
        type: 'object',
        properties: {
          CompanyName: {
            type: 'string',
            maxLength: 40,
          },
          ContactName: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          ContactTitle: {
            type: 'string',
            maxLength: 30,
            nullable: true,
          },
          Address: {
            type: 'string',
            maxLength: 60,
            nullable: true,
          },
          City: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Region: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          PostalCode: {
            type: 'string',
            maxLength: 10,
            nullable: true,
          },
          Country: {
            type: 'string',
            maxLength: 15,
            nullable: true,
          },
          Phone: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          Fax: {
            type: 'string',
            maxLength: 24,
            nullable: true,
          },
          HomePage: {
            type: 'string',
            nullable: true,
          },
        },
      },
      'NorthwindModel.Territory': {
        title: 'Territory',
        type: 'object',
        properties: {
          TerritoryID: {
            type: 'string',
            maxLength: 20,
          },
          TerritoryDescription: {
            type: 'string',
            maxLength: 50,
          },
          RegionID: {
            type: 'integer',
            format: 'int32',
          },
          Region: {
            $ref: '#/components/schemas/NorthwindModel.Region',
          },
          Employees: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/NorthwindModel.Employee',
            },
          },
          'Employees@count': {
            $ref: '#/components/schemas/count',
          },
        },
      },
      'NorthwindModel.Territory-create': {
        title: 'Territory (for create)',
        type: 'object',
        properties: {
          TerritoryID: {
            type: 'string',
            maxLength: 20,
          },
          TerritoryDescription: {
            type: 'string',
            maxLength: 50,
          },
          RegionID: {
            type: 'integer',
            format: 'int32',
          },
        },
        required: ['TerritoryID'],
      },
      'NorthwindModel.Territory-update': {
        title: 'Territory (for update)',
        type: 'object',
        properties: {
          TerritoryDescription: {
            type: 'string',
            maxLength: 50,
          },
          RegionID: {
            type: 'integer',
            format: 'int32',
          },
        },
      },
      count: {
        anyOf: [
          {
            type: 'integer',
            minimum: 0,
          },
          {
            type: 'string',
          },
        ],
        description:
          'The number of entities in the collection. Available when using the [$count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount) query option.',
      },
      error: {
        type: 'object',
        required: ['error'],
        properties: {
          error: {
            type: 'object',
            required: ['code', 'message'],
            properties: {
              code: {
                type: 'string',
              },
              message: {
                type: 'object',
                properties: {
                  lang: {
                    type: 'string',
                  },
                  value: {
                    type: 'string',
                  },
                },
                required: ['lang', 'value'],
              },
              innererror: {
                type: 'object',
                description: 'The structure of this object is service-specific',
              },
            },
          },
        },
      },
    },
    parameters: {
      top: {
        name: '$top',
        in: 'query',
        description:
          'Show only the first n items, see [Paging - Top](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptiontop)',
        schema: {
          type: 'integer',
          minimum: 0,
        },
        example: 50,
      },
      skip: {
        name: '$skip',
        in: 'query',
        description:
          'Skip the first n items, see [Paging - Skip](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionskip)',
        schema: {
          type: 'integer',
          minimum: 0,
        },
      },
      count: {
        name: '$count',
        in: 'query',
        description:
          'Include count of items, see [Count](http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptioncount)',
        schema: {
          type: 'boolean',
        },
      },
    },
    responses: {
      error: {
        description: 'Error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
    },
  },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('hydrateRefs', () => {
  it('hydrates lookups in json', () => {
    const spec: any = {
      foo: {
        bar: {
          $ref: '#/components/parameters/top',
        },
      },
      components: {
        parameters: {
          top: { fizz: 'buzz' },
        },
      },
    };

    hydrateRefs(spec);

    expect(spec.foo.bar.$ref).toBe(spec.components.parameters.top);
  });
  it('hydrates API specs', () => {
    const assertRefsAreObjects = (o: any) => {
      if (o !== null && typeof o === 'object') {
        for (const k of Object.keys(o)) {
          if (k === '$ref') {
            expect(o[k] !== null && typeof o[k] === 'object').toBe(true);
          } else {
            assertRefsAreObjects(o[k]);
          }
        }
      }
    };

    hydrateRefs(spec as any);

    assertRefsAreObjects(spec);
  });
});
