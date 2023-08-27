<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/master_programs">
        <html>
            <body>
                <h1>Master Programs and Courses</h1>
                <xsl:apply-templates select="program"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="program">
        <h2><xsl:value-of select="program_name"/></h2>
        <table border="1">
            <tr>
                <th>Sl. No</th>
                <th>Course Name</th>
            </tr>
            <xsl:apply-templates select="courses/course_name"/>
        </table>
    </xsl:template>

    <xsl:template match="course_name">
        <xsl:variable name="position" select="position()"/>
        <tr>
            <td><xsl:value-of select="$position"/></td>
            <td><xsl:value-of select="."/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
