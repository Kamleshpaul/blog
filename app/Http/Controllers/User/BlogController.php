<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Blog;

class BlogController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Blog
     */
    public function index()
    {
        $blogs = Blog::where('status', 'publish')->paginate(10);

        $blogs->map(function ($item) {

            $item['content'] = \Str::limit($item->content, 25);
            $item['create'] = $item->created_at->diffForHumans();

            return $item;
        });

        return $blogs;
    }

    /**
     * Display single blog.
     *
     * @param $slug
     * @return \Illuminate\Http\Blog
     */
    public function show($slug)
    {
        $blog = Blog::whereSlug($slug)
            ->where('status', 'publish')
            ->firstOrFail();
        return $blog;
    }
}
