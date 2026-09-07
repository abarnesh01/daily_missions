<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">

        <html>
            <head>
                <title>Student Portal</title>
            </head>

            <body bgcolor="lightblue">

                <center>

                    <h1>Student Portal</h1>

                    <hr/>

                    <table border="1" cellpadding="15">

                        <tr bgcolor="blue">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Year</th>
                        </tr>

                        <xsl:for-each select="students/student">

                            <tr>

                                <td>
                                    <xsl:value-of select="id"/>
                                </td>

                                <td>
                                    <xsl:value-of select="name"/>
                                </td>

                                <td>
                                    <xsl:value-of select="department"/>
                                </td>

                                <td>
                                    <xsl:value-of select="year"/>
                                </td>

                            </tr>

                        </xsl:for-each>

                    </table>

                    <br/>

                    <h3>
                        Total Students:
                        <xsl:value-of select="count(students/student)"/>
                    </h3>

                </center>

            </body>
        </html>

    </xsl:template>

</xsl:stylesheet>